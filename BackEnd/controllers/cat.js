const Cat = require('../models/cat');

exports.getAllCatsByKeyword = async (req, res, next) => {
  const {keyword} = req.query;
  try{
    const allCats = await Cat.findAll({
      where:{
        cat_name: {
          [Op.like]: `%${keyword}%`,
        }
      }
    });
    console.log(allCats)
    res.status(200).json(allCats);
  }catch(err){
    next(err)
  }
}


exports.getAllCatsByKind = async (req, res, next) => {
  const {kindCode} = req.query;
  try{
    const allKind = await Cat.findAll({
      where:{
        kind_code: kindCode,
      }
    });
    console.log(allKind)
    res.status(200).json(allKind);
  }catch(err){
    next(err)
  }
}