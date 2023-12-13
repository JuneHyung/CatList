import { useSelector } from "react-redux";
import CatKindItem from "./CatKindItem";
import NoData from "../common/NoData";
import { TotalInitialstate } from "../../types";

const CatKindList = () =>{
  const catKindList = useSelector((state: TotalInitialstate)=> state.cat.catKindList)

  return (
    <ul className="cat-kind-list">
      {catKindList.length===0 ? <NoData /> : catKindList.map((item) =>(
        <CatKindItem item={item} key={item.kind_code} />
      ))}
    </ul>
  )
}
export default CatKindList;