import CatKindList from "./CatKindList";
import CatList from "./CatList";
import CatDetail from "./CatDetail"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllKind } from "../../api/cats";
import { setCatKindList } from "../../stores/actions/cat";

const CatListArea = () => {
  const {selectedCat} = useSelector((state)=> state.cat);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setCatKindList());
  }, [dispatch])
  return (
    <div className="cat-list-wrap">
      <CatKindList />
      {
        selectedCat.catNo===undefined ? <CatList /> : <CatDetail />      
      }
    </div>
  );
};
export default CatListArea;
