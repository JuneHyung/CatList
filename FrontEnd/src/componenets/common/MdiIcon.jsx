import * as mdiIcons from "@mdi/js";

const MdiIcon = ({name, onClick}) =>{
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className='custom-icon' onClick={onClick}>
      <path d={mdiIcons[name]}></path>
    </svg>
  )
}
export default MdiIcon