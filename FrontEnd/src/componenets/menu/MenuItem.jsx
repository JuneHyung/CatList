import { Link } from "react-router-dom"
import MdiIcon from "../common/MdiIcon";

const MenuItem = ({itemInfo}) => {
  return (
    <li className="menu-item" key={itemInfo.path}>
      <Link to={itemInfo.path}>
        <MdiIcon name={itemInfo.icon} />
        {itemInfo.label}
      </Link>
    </li>
  )
}

export default MenuItem;