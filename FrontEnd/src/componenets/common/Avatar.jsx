const Avatar = ({url}) =>{
  return (
    <div className="avatar">
      <img src={`data:image/jpeg;base64,${url}`} alt="Kind Profile"  />
    </div>
  )
}

export default Avatar;