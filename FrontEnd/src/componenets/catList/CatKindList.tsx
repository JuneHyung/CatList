import { useSelector } from "react-redux";
import CatKindItem from "./CatKindItem";
import NoData from "../common/NoData";

const CatKindList = () =>{
  const {catKindList} = useSelector((state: {cat: CatInitialState})=> state.cat)

  return (
    <ul className="cat-kind-list">
      {catKindList.length===0 ? <NoData /> : catKindList.map((item) =>(
        <CatKindItem item={item} key={item.kind_code} />
      ))}
    </ul>
  )
}
export default CatKindList;