import CatKindList from "./CatKindList";
import CatList from "./CatList";
import CatDetail from "./CatDetail"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCatKindList } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";

const CatListArea = () => {
  const {selectedCat} = useSelector((state: any)=> state.cat);
  const dispatch:ThunkDispatch = useDispatch();
  useEffect(()=>{
    dispatch(setCatKindList());
  }, [dispatch])

  return (
    <div className="cat-list-wrap">
      <CatKindList />
      {
        selectedCat.cat_code===undefined ? <CatList /> : <CatDetail />      
      }
    </div>
  );
};
export default CatListArea;
