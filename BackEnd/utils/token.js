require("dotenv").config();
const Token = require("../models/Token");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.ACCESS_TOKEN_SECRET;

// accessToken 발급
exports.makeToken = (obj) => {
  const token = jwt.sign(obj, JWT_KEY, { expiresIn: "2m" });
  console.log(`make token : ${token}`);
  return token;
};

// refreshToken 발급
exports.makeRefreshToken = () => {
  const refreshToken = jwt.sign({}, JWT_KEY, {
    algorithm: "HS256",
    expiresIn: "10m",
  });
  console.log(`make refresh token : ${refreshToken}`);
  return refreshToken;
};

// refreshToken 유효성 검사
exports.refreshVerify = async (token, userId) => {
  try {
    const result = await Token.findOne({
      attributes: ["token"],
      where: { email: userId },
    });
    console.log(token)
    console.log(result.token)
    if (token === result.token) {
      try {
        jwt.verify(token, JWT_KEY);
        return true;
      } catch (err) {
        console.error(`refreshToken 검증에러 : ${err}`);
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    console.error(`DB Error : ${err}`);
    return false;
  }
};

// accessToken 유형성 검사
exports.verify = (token) => {
  try{
    const decoded = jwt.verify(token, JWT_KEY);
    return {
      ok: true,
      id: decoded.id
    };
  }catch(err){
    return {
      ok: false,
      message: err.message
    }
  }
}