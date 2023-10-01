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

    // 조회수 증가
    await Cat.increment('see', {
      by: 1, // 증가할 양
      where:{ charc_id: charcId }
    })
    res.status(200).json(charcInfo);
  }catch(err) {
    next(err)
  }
}