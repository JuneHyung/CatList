import { Link } from "react-router-dom"

const MenuItem = ({itemInfo}) => {
  return (
    <li className="menu-item" key={itemInfo.path}>
      <Link to={`${itemInfo.path}`}>{itemInfo.label}</Link>
    </li>
  )
}

export default MenuItem;