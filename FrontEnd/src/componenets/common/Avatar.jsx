const Avatar = ({url}) =>{
  return (
    <div className="avatar">
      <img src={`/images/cats/${url}`} alt="Avatar" />
    </div>
  )
}

export default Avatar;