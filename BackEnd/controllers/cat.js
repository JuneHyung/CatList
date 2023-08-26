const { Op } = require('sequelize');
const Cat = require('../models/cat');
const Kind = require('../models/kind');

const perPage = 5;

exports.getAllCatsByKeyword = async (req, res, next) => {
  const {keyword, curPage} = req.query;
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
      include:[{model: Kind, attributes: ['kind_name']}]
    });
    
    const result = allCats.map(cat=>{
      const {Kind, cat_age, cat_code, cat_name, charc_id, create_date, description, kind_code, profile, see} = cat;
      return {
        kind_name: Kind.kind_name,
        cat_age,
        cat_code,
        cat_name,
        charc_id,
        create_date,
        description,
        kind_code,
        profile,
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
      include:[{model: Kind, attributes: ['kind_name']}]
    });
    const result = allCats.map(cat=>{
      const {Kind, cat_age, cat_code, cat_name, charc_id, create_date, description, kind_code, profile, see} = cat;
      return {
        kind_name: Kind.kind_name,
        cat_age,
        cat_code,
        cat_name,
        charc_id,
        create_date,
        description,
        kind_code,
        profile,
        see,
      };
    })
    res.status(200).json(result);
  }catch(err){
    next(err)
  }
}
