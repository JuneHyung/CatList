import { useCallback } from "react";
import MdiIcon from "../common/MdiIcon";
import { useState } from "react";
import BadgeItem from "./BadgeItem";
import { useDispatch } from "react-redux";
import { getCatListByKeyword, resetIsEndData } from "../../stores/actions/cat";
import CustomKeyboard from "./CustomKeyboard";
const SearchBar = () => {
  const [inputValue, setInputValue] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  
  // InputValue 갱신
  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  // Badge 추가
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
      dispatch(resetIsEndData());
      dispatch(getCatListByKeyword({keyword:inputValue, curPage: 1}))
      addBadgeItem();
    }
  }, [addBadgeItem, dispatch, inputValue]);

  // Icon Click Search
  const handleClickSearch = useCallback(()=>{
    dispatch(resetIsEndData());
    dispatch(getCatListByKeyword({keyword:inputValue, curPage: 1}));
    addBadgeItem();
  }, [addBadgeItem, dispatch, inputValue])

  const handleOpenVirtualKeyboard = useCallback(()=>{
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <div className="search-badge-wrap-box">
      <div className="search-bar">
        <input type="text" className="search-input" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKey} />
        <MdiIcon name="mdiKeyboard" onClick={handleOpenVirtualKeyboard}></MdiIcon>
        <MdiIcon name="mdiMagnify" onClick={handleClickSearch}></MdiIcon>
      </div>
      <ul className="badge-bar jh-my-sm">
        {searchItem.map((item, idx) => (
          <BadgeItem key={`${item}${idx}`} item={item} >{item}</BadgeItem>
        ))}
      </ul>
      {isOpen && <CustomKeyboard inputValue={inputValue} setInputValue={setInputValue} setIsOpen={setIsOpen} handleClickSearch={handleClickSearch}/>}
    </div>
  );
};
export default SearchBar;
