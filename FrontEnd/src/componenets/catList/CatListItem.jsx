import { useCallback } from "react";
import Avatar from "../common/Avatar";
import { useDispatch } from "react-redux";
import { setSelectedCat } from "../../stores/actions/cat";
const CatListItem = ({ item }) => {
  const dispatch = useDispatch();
  const onHandleClick = useCallback(() => {
    dispatch(setSelectedCat(item));
  }, [dispatch, item]);
  return (
    <li className="cat-list-item" onClick={onHandleClick}>
      <div className="cat-profile-box">
        <Avatar url={`cat${item.kind_code.replace(/catKind/g, "")}.jpg`} />
        <div>
          <p>{item.cat_name}</p> 
          <p className="cat-kind-name">{item.kind_name}</p>
        </div>
      </div>
      <div className="cat-photo">
        <img src={`/images/cats/${item.profile}`} alt={item.catName} className="cat-profile" />
      </div>
      <p className="cat-description">{item.description}</p>
    </li>
  );
};

export default CatListItem;
