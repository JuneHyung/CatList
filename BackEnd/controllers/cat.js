const { Op } = require('sequelize');
const Cat = require('../models/cat');
const Kind = require('../models/kind');

const perPage = 10;

exports.getAllCatsByKeyword = async (req, res, next) => {
  const {keyword, curPage} = req.query;
  console.log(keyword, curPage)
  try{
    const allCats = await Cat.findAll({
      where:{
        [Op.or]: [
          { cat_name: { [Op.like]: `%${keyword}%` } },
          { '$Kind.kind_name$': { [Op.like]: `%${keyword}%` } }
        ]
      },
      offset: (curPage-1)* perPage,
      limit: perPage,
      include:[{model: Kind, attributes: ['kind_name', 'kind_profile']}]
    });
    
    const result = allCats.map((item)=>{
      const {Kind, cat_age, cat_code, cat_name, charc_id, create_date, description, kind_code, profile, address, see, user_id} = item.dataValues;
      return {
        kind_name: Kind.kind_name,
        kind_profile: Kind.kind_profile.toString('base64'),
        cat_age,
        cat_code,
        cat_name,
        charc_id,
        create_date,
        description,
        kind_code,
        profile: profile.toString('base64'),
        address,
        see,
        user_id
      };
    })
    
    res.status(200).json(result);
  }catch(err){
    next(err)
  }
}


exports.getAllCatsByKind = async (req, res, next) => {
  const {kind_code, curPage} = req.query;
  try{
    const allCats = await Cat.findAll({
      where:{
        kind_code: kind_code,
      },
      offset: (curPage-1)* perPage,
      limit: perPage,
      include:[{model: Kind, attributes: ['kind_name', 'kind_profile']}]
    });
    const result = allCats.map((item)=>{
      const {Kind, cat_age, cat_code, cat_name, charc_id, create_date, description, kind_code, profile, address, see, user_id} = item.dataValues;
      return {
        kind_name: Kind.kind_name,
        kind_profile: Kind.kind_profile.toString('base64'),
        cat_age,
        cat_code,
        cat_name,
        charc_id,
        create_date,
        description,
        kind_code,
        profile: profile.toString('base64'),
        address,
        see,
        user_id
      };
    })
    res.status(200).json(result);
  }catch(err){
    next(err)
  }
}

exports.postCatInfo = async (req, res, next) => {
  const accessToken = req.headers["authorization"].split(' ')[1];
  const decoded = jwt.decode(accessToken);
  const user_id = decoded.id;
  
  const { cat_name, cat_age, kind_code, description, profile, address, extrovert, introvert, curious,tranquil, independence, friendly } = req.body;
  if(user_id) res.status(400).json({ code: 400, message: "Error" });
  else{
    try {
      const maxCode = await Cat.max('cat_code');
      const createDate = dayjs().format('YYYY-MM-DD');
      await Cat.create({
        cat_name,
        cat_age,
        kind_code,
        description,
        create_date: createDate,
        profile,
        address,
        charc_id: `catCharc${Number(maxCode)+1}`,
        user_id
      });
      await Charc.create({
        charc_id: `catCharc${Number(maxCode)+1}`,
        extrovert,
        introvert,
        curious,
        tranquil,
        independence,
        friendly
      })

      res.status(200).json({ code: 200, message: "추가 성공!" });
    } catch (err) {
      next(err);
    }
  }
};

exports.putCatInfo = async (req, res, next) => {
  const accessToken = req.headers["authorization"].split(' ')[1];
  const decoded = jwt.decode(accessToken);
  const user_id = decoded.id;
  const { cat_code, cat_name, cat_age, kind_code, description, profile, address, charc_id, extrovert, introvert, curious,tranquil, independence, friendly } = req.body;
  if(user_id) res.status(400).json({ code: 400, message: "Error" });
  else{
    try {
      await Cat.update({
        cat_name,
        cat_age,
        kind_code,
        description,
        profile,
        address,
        charc_id,
      },{where:{
        cat_code
      }});
      await Charc.update({
        extrovert,
        introvert,
        curious,
        tranquil,
        independence,
        friendly
      },{where:{
        charc_id
      }});
      res.status(200).json({ code: 200, message: "수정 성공!" });
    } catch (err) {
      next(err);
    }
  }
};

exports.deleteCatInfo = async (req, res, next) => {
  const accessToken = req.headers["authorization"].split(' ')[1];
  const decoded = jwt.decode(accessToken);
  const user_id = decoded.id;
  const {catCode} = req.params;
  if(user_id) res.status(400).json({ code: 400, message: "Error" });
  else{
    try {
      await Cat.destroy({where: {cat_code: catCode, user_id}});
      
      res.status(200).json({ code: 200, message: "수정 성공!" });
    } catch (err) {
      next(err);
    }
  }
};
