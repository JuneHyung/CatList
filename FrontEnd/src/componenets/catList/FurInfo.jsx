const FurInfo = ({info}) =>{
  return (
    <div className="fur-info">
      <p> {info.kind_name}의 특징 </p>
      <p> {info.kind_form} </p>
      <p> {info.kind_fur} </p>
      <p> {info.kind_fur_pattern} </p>
    </div>
  )
}

export default FurInfo