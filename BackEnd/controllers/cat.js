const { Op } = require('sequelize');
const Cat = require('../models/cat');

exports.getAllCatsByKeyword = async (req, res, next) => {
  const {keyword} = req.params;
  try{
    const allCats = await Cat.findAll({
      where:{
        cat_name: {
          [Op.like]: `%${keyword}%`,
        }
      }
    });
    res.status(200).json(allCats);
  }catch(err){
    console.log(err)
    next(err)
  }
}


exports.getAllCatsByKind = async (req, res, next) => {
  const {kindCode} = req.params;
  try{
    const allKind = await Cat.findAll({
      where:{
        kind_code: kindCode,
      }
    });
    res.status(200).json(allKind);
  }catch(err){
    next(err)
  }
}