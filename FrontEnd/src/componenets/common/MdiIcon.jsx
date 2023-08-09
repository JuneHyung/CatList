import * as mdiIcons from "@mdi/js";

const MdiIcon = ({name}) =>{
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className='custom-icon'>
      <path d={mdiIcons[name]}></path>
    </svg>
  )
}
export default MdiIcon