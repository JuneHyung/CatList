import { useDispatch, useSelector } from "react-redux";
import NoData from "../common/NoData";
import Spinner from "../common/Spinner";
import CatListItem from "./CatListItem";
import { useCallback } from "react";
import { getCatListByKeyword, getCatListByKind } from "../../stores/actions/cat";

const CatList = () => {
  const {catList, selectedKindCode, lastKeyword, curPage, isLoading} = useSelector((state)=> state.cat)
  const dispatch = useDispatch();
  const handleOnScroll = useCallback((e)=>{
    const bottom = e.target.scrollHeight <= e.target.scrollTop + e.target.clientHeight;
    // console.log(e.target.scrollHeight, e.target.scrollTop, e.target.clientHeight)
    if(bottom){
      if(selectedKindCode.length!==0) dispatch(getCatListByKind({kind_code: selectedKindCode ,curPage: curPage+1}));
      else if(lastKeyword.length!==0) dispatch(getCatListByKeyword({keyword: lastKeyword, curPage: curPage+1}));
    }
  },[curPage, dispatch, lastKeyword, selectedKindCode])
  return (
    <ul className="cat-list" onScroll={handleOnScroll}>
      {isLoading ? (<Spinner />) : catList.length === 0 ? <NoData /> : catList.map((item) => <CatListItem item={item} key={item.cat_code} />)}
    </ul>
  );
};

export default CatList;
