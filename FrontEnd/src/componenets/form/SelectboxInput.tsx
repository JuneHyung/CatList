import { ChangeEvent, SelectHTMLAttributes, useCallback } from "react"
interface SelectboxItem {
  dtlCd: string,
  dtlNm: string
}
type SelectboxList = SelectboxItem[]
interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
  label: string,
  list: SelectboxList
  formData: Object,
  onChange: (v: Object)=>void,
}

const SelectboxInput = ({label, value, onChange, name, formData, list}: Props) =>{
  const handleInputChange = useCallback((e: ChangeEvent<HTMLSelectElement>) =>{
    const {name, value} = e.target;
    onChange({
      ...formData,
      [name]: value
    })
  },[formData, onChange])
  
  return (
    <label htmlFor={name} className="edit-label">
        <span className="edit-text">{label}</span>
        <select value={value} name={name} className="edit-input jh-ml-sm" onChange={handleInputChange}>
          {list.map((item)=>(
            <option value={item.dtlCd} key={item.dtlCd}>{item.dtlNm}</option>
          ))}
        </select>
      </label>
  )
}

export default SelectboxInput;