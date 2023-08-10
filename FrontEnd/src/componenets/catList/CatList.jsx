import CatListItem from "./CatListItem";
import catList from "./../../assets/data/catList.json"
const CatList = () => {
  return (
    <ul className="cat-list">
    { catList.map((item)=>
      <CatListItem item={item} key={item.catNo}/>
    )}
    </ul>
  )
}
export default CatList;