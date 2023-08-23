import { useDispatch, useSelector } from "react-redux";
import { getCatListByKind, setSelectedKind } from "../../stores/actions/cat";
import Avatar from "../common/Avatar";
import { useCallback } from "react";

const CatKindItem = ({item}) =>{
  const {selectedKind} = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  
  const handleOnClick = useCallback(() =>{
    dispatch(setSelectedKind(item.kind_name));
    dispatch(getCatListByKind(item.kind_code));
  }, [item.kind_name, item.kind_code, dispatch])

  return (
    <li className={`cat-kind-item ${selectedKind === item.kind_name ? 'active-kind' : ''}`} onClick={handleOnClick}>
      <Avatar url={item.kind_profile} />
      {item.kind_name}
    </li>
  )
}

export default CatKindItem;