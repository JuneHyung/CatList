import CatListArea from "../componenets/catList/CatListArea"
import SearchBar from "../componenets/catList/SearchBar"

const CatListPage =() =>{
  return (
    <div className="cat-list-page">
      <SearchBar />
      <CatListArea />
    </div>
  )
}

export default CatListPage