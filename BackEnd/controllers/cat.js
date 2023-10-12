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
      const {Kind, cat_age, cat_code, cat_name, charc_id, create_date, description, kind_code, profile, address, see} = item.dataValues;
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
      const {Kind, cat_age, cat_code, cat_name, charc_id, create_date, description, kind_code, profile, address, see} = item.dataValues;
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
      };
    })
    res.status(200).json(result);
  }catch(err){
    next(err)
  }
}
