import CatKindList from "./CatKindList";
import CatList from "./CatList";
import CatDetail from "./CatDetail"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCatKindList } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";
import { TotalInitialstate } from "../../types";
import Spinner from "../common/Spinner";
import CatEdit from "./CatEdit";

const CatListArea = () => {
  const {selectedCat, isLoading, catEditFlag} = useSelector((state: TotalInitialstate)=> state.cat);
  const dispatch:ThunkDispatch = useDispatch();

  useEffect(()=>{
    dispatch(setCatKindList());
  }, [dispatch])

  return (
    <div className="cat-list-wrap">
      <CatKindList />
      {
        isLoading 
        ? <Spinner /> 
        : selectedCat.cat_code===-1 && !catEditFlag
        ? <CatList /> 
        : selectedCat.cat_code!==-1 && !catEditFlag
        ? <CatDetail />      
        : <CatEdit />
      }
    </div>
  );
};
export default CatListArea;
