import CatList from "../componenets/catList/CatListArea"
import SearchBar from "../componenets/catList/SearchBar"

const CatListPage =() =>{
  return (
    <div className="cat-list-page">
      <SearchBar />
      <CatList />
    </div>
  )
}

export default CatListPage