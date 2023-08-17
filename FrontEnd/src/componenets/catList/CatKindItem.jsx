import Avatar from "../common/Avatar";

const CatKindItem = ({item, selectedKind, onClick}) =>{
  const handleOnClick = () =>{
    onClick(item.kind);
  }
  return (
    <li className={`cat-kind-item ${selectedKind === item.kind ? 'active-kind' : ''}`} onClick={handleOnClick}>
      <Avatar url={item.profile} />
      {item.kind}
    </li>
  )
}

export default CatKindItem;