import MdiIcon from "../common/MdiIcon";
const SearchBar = () =>{
  return(
    <div className="search-bar">
      <input type="text" className="search-input"/>
      <MdiIcon name="mdiMagnify"></MdiIcon>
      <MdiIcon name="mdiMicrophone"></MdiIcon>
    </div>
  )
}
export default SearchBar;