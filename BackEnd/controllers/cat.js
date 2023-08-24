const { Op } = require('sequelize');
const Cat = require('../models/cat');
const Kind = require('../models/kind');

exports.getAllCatsByKeyword = async (req, res, next) => {
  const {keyword} = req.params;
  try{
    const allCats = await Cat.findAll({
      where:{
        [Op.or]: [
          { cat_name: { [Op.like]: `%${keyword}%` } },
          { '$Kind.kind_name$': { [Op.like]: `%${keyword}%` } }
        ]
      },
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
    console.log(err)
    next(err)
  }
}


exports.getAllCatsByKind = async (req, res, next) => {
  const {kindCode} = req.params;
  try{
    const allCats = await Cat.findAll({
      where:{
        kind_code: kindCode,
      },
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