import CatKindItem from "./CatKindItem";

const CatKindList = ({catList, selectedKind, handleKind}) =>{
  return (
    <ul className="cat-kind-list">
      {catList.map((item) =>(
        <CatKindItem item={item} key={item.catNo} selectedKind={selectedKind} onClick={handleKind} />
      ))}
    </ul>
  )
}
export default CatKindList;