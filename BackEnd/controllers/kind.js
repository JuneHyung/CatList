const Kind = require('../models/kind');

exports.getAllKind = async (req, res, next) => {
  try{
    const allKind = await Kind.findAll();
    res.status(200).json(allKind);
  }catch(err){
    next(err)
  }
}