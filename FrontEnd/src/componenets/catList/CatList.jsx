import { useSelector } from "react-redux";
import NoData from "../common/NoData";
import CatListItem from "./CatListItem";

const CatList = () => {
  const {catList} = useSelector((state)=> state.cat)

  return <ul className="cat-list">{catList.length === 0 ? <NoData /> : catList.map((item) => <CatListItem item={item} key={item.cat_code} />)}</ul>;
};

export default CatList;
