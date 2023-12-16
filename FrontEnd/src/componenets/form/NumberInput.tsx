import { ChangeEvent, InputHTMLAttributes, useCallback } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label: string,
  formData: Object,
  min: number,
  max: number,
  onChange: (v: Object)=>void,
}

const NumberInput = ({label, value, onChange, name, formData, min, max}: Props) =>{
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    const targetValue = Number(value);
    let result = 0;
    if(targetValue<min) result = min;
    else if(targetValue>max) result = max;
    else result = targetValue;
    
    onChange({
      ...formData,
      [name]: result
    })
  },[formData, onChange])
  
  return (
    <label htmlFor={name} className="edit-label">
      <span className="edit-text">{label}</span>
      <input type="number" name={name} className="edit-input jh-ml-sm" value={value} onChange={handleInputChange} step={0} min={min} max={max}/>
    </label>
  )
}

export default NumberInput