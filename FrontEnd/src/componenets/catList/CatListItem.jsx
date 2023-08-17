import Avatar from "../common/Avatar";

const CatListItem = ({ item }) => {
  return (
    <li className="cat-list-item">
      <div className="cat-profile-box">
        <Avatar url={item.profile} />
        <p> [{item.kind}] {item.catName}</p>
      </div>
      <div className="cat-photo">
        <img src={`/images/cats/${item.profile}`} alt={item.catName} className="cat-profile" />
      </div>
      <p className="cat-description">{item.description}</p>
    </li>
  );
};

export default CatListItem;
