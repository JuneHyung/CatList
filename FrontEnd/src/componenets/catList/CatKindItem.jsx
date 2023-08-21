import { useDispatch, useSelector } from "react-redux";
import { setSelectedKind } from "../../stores/actions/cat";
import Avatar from "../common/Avatar";
import { useCallback } from "react";

const CatKindItem = ({item}) =>{
  const {selectedKind} = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  // const handleOnClick = useCallback(() =>{
  //   dispatch(setSelectedKind(item.kind_name));
  // }, [item.kind, dispatch])
  const handleOnClick = useCallback(() =>{
    // dispatch(setSelectedKind(item.kind_name));
  }, [])

  return (
    <li className={`cat-kind-item ${selectedKind === item.kind_name ? 'active-kind' : ''}`} onClick={handleOnClick}>
      <Avatar url={item.profile} />
      {item.kind_name}
    </li>
  )
}

export default CatKindItem;