import { useCallback } from "react";
import MdiIcon from "../common/MdiIcon";
import { useState } from "react";
import BadgeItem from "./BadgeItem";
import { useDispatch } from "react-redux";
import { getCatListByKeyword } from "../../stores/actions/cat";
const SearchBar = () => {
  const [inputValue, setInputValue] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const dispatch = useDispatch();
  
  // InputValue 갱신
  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  // Badge추가
  const addBadgeItem = useCallback(() => {
    setSearchItem((prev) => {
      const filtered = prev.filter((item)=> item!==inputValue);
      return filtered.length===7 ? [...filtered.slice(1), inputValue] : [...filtered, inputValue]
    });
    setInputValue("");
  }, [inputValue])

  // Enter Key Search
  const handleEnterKey = useCallback((event) => {
    if (event.key === "Enter") {
      dispatch(getCatListByKeyword(inputValue))
      addBadgeItem();
    }
  }, [addBadgeItem, dispatch, inputValue]);

  // Icon Click Search
  const handleClickSearch = useCallback(()=>{
    dispatch(getCatListByKeyword(inputValue));
    addBadgeItem();
  }, [addBadgeItem, dispatch, inputValue])

  return (
    <div>
      <div className="search-bar">
        <input type="text" className="search-input" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKey} />
        <MdiIcon name="mdiMagnify" onClick={handleClickSearch}></MdiIcon>
        <MdiIcon name="mdiMicrophone"></MdiIcon>
      </div>
      <ul className="badge-bar jh-my-sm">
        {searchItem.map((item, idx) => (
          <BadgeItem key={`${item}${idx}`} item={item} >{item}</BadgeItem>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;
