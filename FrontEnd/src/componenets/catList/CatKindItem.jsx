import { useDispatch, useSelector } from "react-redux";
import { setSelectedKind } from "../../stores/actions/cat";
import Avatar from "../common/Avatar";
import { useCallback } from "react";

const CatKindItem = ({item}) =>{
  const {selectedKind} = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  const handleOnClick = useCallback(() =>{
    console.log(item.kind)
    dispatch(setSelectedKind(item.kind));
  }, [item.kind, dispatch])

  return (
    <li className={`cat-kind-item ${selectedKind === item.kind ? 'active-kind' : ''}`} onClick={handleOnClick}>
      <Avatar url={item.profile} />
      {item.kind}
    </li>
  )
}

export default CatKindItem;