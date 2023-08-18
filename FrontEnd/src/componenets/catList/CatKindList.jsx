import { useDispatch, useSelector } from "react-redux";
import CatKindItem from "./CatKindItem";
import { getCatKindList } from "../../stores/actions/cat";
import NoData from "../common/NoData";
import { useEffect } from "react";

const CatKindList = () =>{
  const {catKindList} = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCatKindList())
  }, [dispatch])

  return (
    <ul className="cat-kind-list">
      {catKindList.length===0 ? <NoData /> : catKindList.map((item) =>(
        <CatKindItem item={item} key={item.catNo} />
      ))}
    </ul>
  )
}
export default CatKindList;