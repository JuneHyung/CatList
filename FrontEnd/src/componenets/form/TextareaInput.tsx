import { ChangeEvent, useCallback } from "react"

interface Props {
  label: string,
  value: string,
  name: string,
  maxLength: number,
  rows: number,
  formData: Object,
  onChange: (v: Object)=>void,
}

const TextareaInput = ({label, value, onChange, name, maxLength=200, formData, rows=5}: Props) =>{
  const handleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) =>{
    const {name, value} = e.target;
    onChange({
      ...formData,
      [name]: value
    })
  },[formData, onChange])
  
  return (
    <label htmlFor={name} className="edit-label">
      <span className="edit-text">{label}</span>
      <textarea name={name} className="edit-input-area jh-ml-sm" value={value} onChange={handleInputChange} maxLength={maxLength} rows={rows}/>
    </label>
  )
}

export default TextareaInput