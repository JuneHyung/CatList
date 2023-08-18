import { useDispatch, useSelector } from "react-redux";
import CatKindItem from "./CatKindItem";
import { setSelectedKind } from "../../stores/actions/cat";
import NoData from "../common/NoData";

const CatKindList = ({list}) =>{
  const {catList, selectedKind} = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  console.log(list)
  const handleOnClick = (kind) => {
    dispatch(setSelectedKind(kind))
  }
  return (
    <ul className="cat-kind-list">
      {catList.length===0 ? <NoData /> : catList.map((item) =>(
        <CatKindItem item={item} key={item.catNo} selectedKind={selectedKind} onClick={handleOnClick} />
      ))}
    </ul>
  )
}
export default CatKindList;