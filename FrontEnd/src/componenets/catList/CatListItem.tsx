import { useCallback } from "react";
import Avatar from "../common/Avatar";
import NoImage from "../common/NoImage";
import { useDispatch } from "react-redux";
import { setSelectedCat, setSelectedCharc } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";
const CatListItem = ({ item }) => {
  const dispatch: ThunkDispatch = useDispatch();
  const onHandleClick = useCallback(() => {
    dispatch(setSelectedCat(item));
    dispatch(setSelectedCharc(item.charc_id))
  }, [dispatch, item]);

  return (
    <li className="cat-list-item" onClick={onHandleClick}>
      <div className="cat-profile-box">
        <Avatar url={item.kind_profile} />
        <div>
          <p>{item.cat_name}</p> 
          <p className="cat-kind-name">{item.kind_name}</p>
        </div>
      </div>
      <div className="cat-photo">
        {item.profile.toString().length===0 ? <NoImage /> : <img src={`data:image/jpeg;base64,${item.profile}`} alt={item.catName} className="cat-profile" />}
      </div>
      <p className="cat-description">{item.description}</p>
    </li>
  );
};

export default CatListItem;
