import { useDispatch, useSelector } from "react-redux";
import NoData from "../common/NoData";
import Spinner from "../common/Spinner";
import CatListItem from "./CatListItem";
import { UIEvent, useCallback } from "react";
import { getCatListByKeyword, getCatListByKind } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";
import { CatInfo } from "../../types/cat";

const CatList = () => {
  const {catList, selectedKindCode, lastKeyword, curPage, isLoading} = useSelector((state: any)=> state.cat)
  const {isLogin} = useSelector((state: any)=> state.user)
  const dispatch: ThunkDispatch = useDispatch();
  const handleOnScroll = useCallback((e:UIEvent<HTMLUListElement>)=>{
    const bottom = e.currentTarget.scrollHeight <= e.currentTarget.scrollTop + e.currentTarget.clientHeight;
    if(bottom){
      if(selectedKindCode.length!==0) dispatch(getCatListByKind({kind_code: selectedKindCode ,curPage: curPage+1}));
      else if(lastKeyword.length!==0) dispatch(getCatListByKeyword({keyword: lastKeyword, curPage: curPage+1}));
    }
  },[curPage, dispatch, lastKeyword, selectedKindCode])
  return (
    <ul className="cat-list" onScroll={handleOnScroll}>
      {isLoading 
      ? (<Spinner />) 
      : catList.length === 0 ? <NoData /> : catList.map((item: CatInfo) => <CatListItem item={item} key={item.cat_code} />)}
    </ul>
  );
};

export default CatList;
