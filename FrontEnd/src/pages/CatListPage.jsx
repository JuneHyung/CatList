import { useSelector } from "react-redux"
import CatListArea from "../componenets/catList/CatListArea"
import SearchBar from "../componenets/catList/SearchBar"
import CatDetailPage from "./CatDetailPage"

const CatListPage =() =>{
  const { selectedCat } = useSelector((state)=> state.cat)

  return (
    <div className="cat-list-page">
      <SearchBar />
      {selectedCat.catNo===undefined ? <CatListArea /> : <CatDetailPage />}
    </div>
  )
}

export default CatListPage