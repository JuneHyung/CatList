import { useCallback } from "react";
import MdiIcon from "../common/MdiIcon";
import { useState } from "react";
import BadgeItem from "./BadgeItem";
import { useDispatch } from "react-redux";
import { getCatList, getCatListByKeyword } from "../../stores/actions/cat";
const SearchBar = () => {
  const [inputValue, setInputValue] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const dispatch = useDispatch();
  // 
  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  // enter시 Badge추가

  const addBadgeItem = useCallback(() => {
    setSearchItem((prev) => {
      const filtered = prev.filter((item)=> item!==inputValue);
      return filtered.length===7 ? [...filtered.slice(1), inputValue] : [...filtered, inputValue]
    });
    setInputValue("");
  }, [inputValue])

  const handleEnterKey = useCallback((event) => {
    if (event.key === "Enter") {
      setInputValue(event.target.value);
      dispatch(getCatListByKeyword(inputValue))
      addBadgeItem();
    }
  }, [addBadgeItem, dispatch, inputValue]);
  
  const searchCatList = useCallback(()=>{
    dispatch(getCatList())
  }, [])

  return (
    <div>
      <div className="search-bar">
        <input type="text" className="search-input" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKey} />
        <MdiIcon name="mdiMagnify"></MdiIcon>
        <MdiIcon name="mdiMicrophone"></MdiIcon>
      </div>
      <ul className="badge-bar jh-my-sm">
        {searchItem.map((item, idx) => (
          <BadgeItem key={`${item}${idx}`} item={item} onClick={searchCatList}>{item}</BadgeItem>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;
