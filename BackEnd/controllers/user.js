const Token = require('../models/token');
const User = require('../models/user');
const { makeToken, makeRefreshToken, verify, refreshVerify } = require('../utils/token');
const jwt = require('jsonwebtoken');

exports.getLogin = async (req, res) => {
  
  const {userId, userPw} = req.body;
  try{
    const userInfo = await User.findOne({
      where: {
        user_id: userId
      }
    })

    // Exception DB에서 ID찾기
    if(userInfo===null) return res.status(401).send("사용자가 없습니다. 관리자에게 문의해주세요.");

    // Exception ID 불일치
    if(userId!==userInfo.user_id) return res.status(401).send("ID 불일치해요.");


    // Exception PW 불일치
    if(userPw !== userInfo.password) return res.status(401).send("비밀번호가 불일치 해요.")

    // Exception 이메일 인증 완료 X시
    if(userInfo.authStatus !== 1) return res.status(401).send('이메일 인증을 완료하세요.')

    // id, pw 같은 경우 토큰 발급
    const accessToken = makeToken({id: userId});
    const refreshToken = makeRefreshToken();

    const existingToken = await Token.findOne({
      attributes: ['token'],
      where: {user_id: userId}
    })

    // refreshToken , id DB에 저장
    if(existingToken){
      await Token.update(
        {token: refreshToken},
        { 
          where: {
            user_id: userId 
          }
        }
      );
      return res.status(200).json({userId, accessToken, refreshToken})
    }else{
      await Token.create({
        email: userId,
        token: refreshToken
      })
      return res.status(200).json({userId, accessToken, refreshToken})
    }
  }catch(err) {throw err;}
}


const successResponse = (code, data) => {return {code, data}}
const failResponse = (code, message) => {code, message}

exports.getRefresh = async (req, res) =>{
  if(req.headers["authorization"] && req.headers["refresh"]){
    const accessToken = req.headers["authorization"].split(' ')[1];
    const refreshToken = req.headers["refresh"];

    // accessToken 검증 => expired인지.
    const accessIsExpired = verify(accessToken);
    console.log(accessIsExpired)

    // accessToken 디코딩하여 userId 가져옴.
    const decoded = jwt.decode(accessToken);
    console.log(decoded)
    if(!decoded){console.log(0); res.status(401).send(failResponse(401, "No Authorized"))}

    // access 토큰 만료시
    if(!accessIsExpired.ok && accessIsExpired.message==='jwt expired'){
      // 1. accessToken이 만료되고, refreshToken도 만료된경우 => 새로 로그인
      console.log(1)
      const refreshResult = await refreshVerify(refreshToken, decoded.id);
      console.log(refreshResult)
      if(refreshResult===false) res.status(401).send(failResponse(401, 'No Authorized! 다시 로그인해주세요.'))
      else{
        console.log(2)
        // 2. accessToken이 만료되고, refreshToken은 만료되지 않은 경우 => 새로운 accessToken 발급
        const newAccessToken = makeToken({id: decoded.id});

        res.status(200).send(successResponse(200, {
          accessToken: newAccessToken,
          refreshToken,
        }))
      }
    }else{
      console.log(3)
      // 3. accessToken이 만료되지 않은 경우 => refresh할 필요 없음.
      res.status(400).send(failResponse(400, "Access Token is not expired!"));
    }
  }else{
    console.log(4)
    // accessToken 또는 refreshToken이 헤더에 없는 경우
    res.status(401).send(failResponse(401, "Access Token & Refresh Token are need for refresh!"))
  }
}