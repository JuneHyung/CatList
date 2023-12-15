import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TotalInitialstate } from "../../types";
import TextInput from "../form/TextInput";

const CatEdit = () => {
  const {selectedCat, selectedKindCode, editFlag} = useSelector((state: TotalInitialstate) => state.cat);
  console.log(selectedCat, selectedKindCode, editFlag)
  const [formData, setFormData] = useState({
    cat_code: '',
    cat_name: '',
    cat_age: '',
    kind_code: '',
    description: '',
    profile: '',
    address: '',
    extrovert: '',
    introvert: '',
    curious: '',
    tranquil: '',
    indepenedence: '',
    friendly: '',
  })
  
  useEffect(()=>{
    if(selectedKindCode) setFormData({
      ...formData,
      kind_code: selectedKindCode
    })
  }, [formData, selectedKindCode])

  return (
    <div>
      <form action="">
        <TextInput label="고양이 이름" value={formData.cat_name} onChange={setFormData} name="cat_name" formData={formData}/>
        <TextInput label="고양이 나이" value={formData.cat_age} onChange={setFormData} name="cat_age"  formData={formData}/>
        <TextInput label="고양이 종류" value={formData.kind_code} onChange={setFormData} name="kind_code"  formData={formData}/>
        <TextInput label="고양이 소개" value={formData.description} onChange={setFormData} name="description"  formData={formData}/>
        <TextInput label="거주지" value={formData.address} onChange={setFormData} name="address"  formData={formData}/>
        <TextInput label="프로필 사진" value={formData.profile} onChange={setFormData} name="profile"  formData={formData}/>
        <TextInput label="외향적" value={formData.extrovert} onChange={setFormData} name="extrovert"  formData={formData}/>
        <TextInput label="내향적" value={formData.introvert} onChange={setFormData} name="introvert"  formData={formData}/>
        <TextInput label="호기심" value={formData.curious} onChange={setFormData} name="curious"  formData={formData}/>
        <TextInput label="조용함" value={formData.tranquil} onChange={setFormData} name="tranquil"  formData={formData}/>
        <TextInput label="독림심" value={formData.indepenedence} onChange={setFormData} name="independence"  formData={formData}/>
        <TextInput label="친근함" value={formData.friendly} onChange={setFormData} name="friendly" formData={formData}/>
      </form>
    </div>
  )
} 

export default CatEdit;