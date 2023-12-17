import { useEffect } from "react"
import CatListArea from "../componenets/catList/CatListArea"
import SearchBar from "../componenets/catList/SearchBar"
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "../types/action";
import { clearAllCatData } from "../stores/actions/cat";

const CatListPage =() =>{
  const dispatch:ThunkDispatch = useDispatch();
  useEffect(()=>{
    dispatch(clearAllCatData())
  })
  return (
    <div className="cat-list-page">
      <SearchBar />
      <CatListArea />
    </div>
  )
}

export default CatListPage