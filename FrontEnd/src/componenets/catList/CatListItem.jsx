import { useCallback } from "react";
import Avatar from "../common/Avatar";
import NoImage from "../common/NoImage";
import { useDispatch } from "react-redux";
import { setSelectedCat, setSelectedCharc } from "../../stores/actions/cat";
const CatListItem = ({ item }) => {
  const dispatch = useDispatch();
  const onHandleClick = useCallback(() => {
    dispatch(setSelectedCat(item));
    dispatch(setSelectedCharc(item.charc_id))
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
        {/* {item.profile.length===0 ? <NoImage /> : <img src={`/images/cats/${item.profile}`} alt={item.catName} className="cat-profile" />} */}
        <NoImage />
      </div>
      <p className="cat-description">{item.description}</p>
    </li>
  );
};

export default CatListItem;
