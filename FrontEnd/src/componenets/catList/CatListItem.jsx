const CatListItem = ({item}) =>{
  return (
    <li className="cat-list-item">
      <div className="cat-profile-box">
        <img src={`/images/cats/${item.profile}`} alt={item.catName} className="cat-profile"/>
      </div>
      <p> 이름 : {item.catName}</p>
      <p> 품종 : {item.kind}</p>
      <p> {item.description}</p>
    </li>
  )
}

export default CatListItem;