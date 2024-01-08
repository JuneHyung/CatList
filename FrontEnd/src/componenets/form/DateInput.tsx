import { ChangeEvent, InputHTMLAttributes, useCallback } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label: string,
  formData: Object,
  onChange: (v: Object)=>void,
}

const DateInput = ({label, value, onChange, name, formData}: Props) =>{
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
      <input type="date" name={name} className="edit-input jh-ml-sm" value={value} onChange={handleInputChange}/>
    </label>
  )
}

export default DateInput