import { useDispatch, useSelector } from "react-redux";
import { getCatListByKind, resetIsEndData, setSelectedKind } from "../../stores/actions/cat";
import Avatar from "../common/Avatar";
import { useCallback } from "react";

const CatKindItem = ({item}) =>{
  const {selectedKindName} = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  
  const handleOnClick = useCallback(() =>{
    dispatch(resetIsEndData())
    dispatch(setSelectedKind({kind_code: item.kind_code, kind_name: item.kind_name}));
    dispatch(getCatListByKind({kind_code: item.kind_code ,curPage: 1}));
  }, [item.kind_name, item.kind_code, dispatch])

  return (
    <li className={`cat-kind-item ${selectedKindName === item.kind_name ? 'active-kind' : ''}`} onClick={handleOnClick}>
      <Avatar url={item.kind_profile} />
      {item.kind_name}
    </li>
  )
}

export default CatKindItem;