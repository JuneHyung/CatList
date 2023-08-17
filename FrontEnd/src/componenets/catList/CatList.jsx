import NoData from "../common/NoData";
import CatListItem from "./CatListItem";

const CatList = ({ catList, selectedKind }) => {
  return <ul className="cat-list">{selectedKind === "" ? <NoData /> : catList.map((item) => <CatListItem item={item} key={item.catNo} />)}</ul>;
};

export default CatList;
