import { ChangeEvent, useCallback } from "react"

interface Props {
  label: string,
  value: string,
  name: string,
  formData: Object,
  onChange: (v: Object)=>void,
}

const TextInput = ({label, value, onChange, name, formData}: Props) =>{
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    onChange({
      ...formData,
      [name]: value
    })
  },[formData, onChange])
  
  return (
    <label htmlFor={name} className="edit-label">
      <span className="edit-text">{label}</span>
      <input type="text" name={name} className="edit-input jh-ml-sm" value={value} onChange={handleInputChange}/>
    </label>
  )
}

export default TextInput