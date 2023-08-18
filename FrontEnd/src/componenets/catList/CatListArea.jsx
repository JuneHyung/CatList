// import catList from "../../stores/constant/data/catList.json";
import { useEffect } from "react";
import CatKindList from "./CatKindList";
import CatList from "./CatList";
import { useDispatch, useSelector } from "react-redux";
import { getCatList } from "../../stores/actions/cat";

const CatListArea = () => {
  const { catList } = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCatList());
  }, [])

  return (
    <div className="cat-list-wrap">
      <CatKindList list={catList}/>
      <CatList />
    </div>
  );
};
export default CatListArea;
