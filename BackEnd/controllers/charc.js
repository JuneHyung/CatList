const Charc = require("../models/charc");
const Cat = require("../models/cat");

exports.getCatCharcByCharcId = async (req, res, next) => {
  const {charcId} = req.params;
  try{
    const charcInfo = await Charc.findOne({
      where:{
        charc_id: charcId
      }
    })
    if(!charcInfo) return res.status(404).json({message: 'charc를 찾을 수 없습니다.'})
    const charcId = charcInfo.charcId;
    // console.log(charcId)
    // await Cat.increment('see', {
    //   where:{ charcId: charcId }
    // })
    res.status(200).json(charcInfo);
  }catch(err) {
    next(err)
  }
}