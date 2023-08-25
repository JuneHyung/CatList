const Charc = require("../models/charc");

exports.getCatCharcByCharcId = async (req, res, next) => {
  const {charcId} = req.params;
  try{
    const charcInfo = await Charc.findOne({
      where:{
        charc_id: charcId
      }
    })
    res.status(200).json(charcInfo);
  }catch(err) {
    next(err)
  }
}