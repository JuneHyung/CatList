import CatList from "../componenets/catList/CatList"
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