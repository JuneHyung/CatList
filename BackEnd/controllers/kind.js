const Kind = require('../models/kind');

exports.getAllKind = async (req, res, next) => {
  try{
    const allKind = await Kind.findAll();
    const result = allKind.map((item)=>{
      const {kind_profile} = item.dataValues;
      return {
        ...item.dataValues,
        kind_profile: kind_profile.toString('base64'),
      }
    })
    res.status(200).json(result);
  }catch(err){
    next(err)
  }
}