import { useDispatch, useSelector } from "react-redux";
import NoData from "../common/NoData";
import Spinner from "../common/Spinner";
import CatListItem from "./CatListItem";
import { UIEvent, useCallback } from "react";
import { getCatListByKeyword, getCatListByKind } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";

const CatList = () => {
  const {catList, selectedKindCode, lastKeyword, curPage, isLoading} = useSelector((state: {cat: CatInitialState})=> state.cat)
  const dispatch: ThunkDispatch = useDispatch();
  const handleOnScroll = useCallback((e:UIEvent<HTMLUListElement>)=>{
    const bottom = e.currentTarget.scrollHeight <= e.currentTarget.scrollTop + e.currentTarget.clientHeight;
    // console.log(e.target.scrollHeight, e.target.scrollTop, e.target.clientHeight)
    if(bottom){
      if(selectedKindCode.length!==0) dispatch(getCatListByKind({kind_code: selectedKindCode ,curPage: curPage+1}));
      else if(lastKeyword.length!==0) dispatch(getCatListByKeyword({keyword: lastKeyword, curPage: curPage+1}));
    }
  },[curPage, dispatch, lastKeyword, selectedKindCode])
  return (
    <ul className="cat-list" onScroll={handleOnScroll}>
      {isLoading ? (<Spinner />) : catList.length === 0 ? <NoData /> : catList.map((item: CatInfo) => <CatListItem item={item} key={item.cat_code} />)}
    </ul>
  );
};

export default CatList;
