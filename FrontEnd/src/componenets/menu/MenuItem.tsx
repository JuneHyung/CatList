import { Link } from "react-router-dom"
import MdiIcon from "../common/MdiIcon";

const MenuItem = ({itemInfo}) => {
  return (
    <li className="menu-item" key={itemInfo.path}>
      <Link to={itemInfo.path}>
        <MdiIcon name={itemInfo.icon as string} onClick={null}/>
        <span className="jh-ml-sm">{itemInfo.label}</span>
      </Link>
    </li>
  )
}

export default MenuItem;