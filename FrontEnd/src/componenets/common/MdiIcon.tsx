import * as mdiIcons from "@mdi/js";

const MdiIcon = ({name, onClick=null, className=''}) =>{
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`custom-icon ${className}`} onClick={onClick}>
      <path d={mdiIcons[name]}></path>
    </svg>
  )
}
export default MdiIcon