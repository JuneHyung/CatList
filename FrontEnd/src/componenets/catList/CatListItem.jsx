import { useCallback } from "react";
import Avatar from "../common/Avatar";
import { useDispatch } from "react-redux";
import {setSelectedCat} from "../../stores/actions/cat"
const CatListItem = ({ item }) => {
  const dispatch = useDispatch();
  const onHandleClick = useCallback(()=>{
    dispatch(setSelectedCat(item.catNo));
  })
  return (
    <li className="cat-list-item" onClick={onHandleClick}>
      <div className="cat-profile-box">
        <Avatar url={item.profile} />
        <p> [{item._code}] {item.catName}</p>
      </div>
      <div className="cat-photo">
        <img src={`/images/cats/${item.profile}`} alt={item.catName} className="cat-profile" />
      </div>
      <p className="cat-description">{item.description}</p>
    </li>
  );
};

export default CatListItem;
