import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CatEdit = () => {
  const {selectedCat, selectedKindCode, editFlag} = useSelector((state: any) => state.cat);
  console.log(selectedCat, selectedKindCode, editFlag)
  // selectedCat의 코드가 없으면 edit, 있으면 수정
  const [catCode, setCatCode] = useState('');
  const [catName, setCatName] = useState('');
  const [catAge, setCatAge] = useState('');
  const [kindCode, setKindCode] = useState('');
  const [description, setDescription] = useState('');
  const [profile, setProfile] = useState('');
  const [address, setAddress] = useState('');
  const [extrovert, setExtrovert] = useState('');
  const [introvert, setIntrovert] = useState('');
  const [curious, setCurious] = useState('');
  const [tranquil, setTranquil] = useState('');
  const [independence, setIndependece] = useState('');
  const [friendly, setFriendly] = useState('');
  
  useEffect(()=>{
    if(selectedKindCode) setKindCode(selectedKindCode)
  }, [])

  return (
    <div>
      <form action="">
        <input value={catCode} onChange={(e)=>{setCatCode(e.target.value)}}/>
        <input value={catName} onChange={(e)=>{setCatName(e.target.value)}} />
        <input value={catAge} onChange={(e)=>{setCatAge(e.target.value)}} />
        <input value={kindCode} onChange={(e)=>{setKindCode(e.target.value)}} />
        <input value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        <input value={profile} onChange={(e)=>{setProfile(e.target.value)}} />
        <input value={address} onChange={(e)=>{setAddress(e.target.value)}} />
        <input value={extrovert} type="number" onChange={(e)=>{setExtrovert(e.target.value)}} />
        <input value={introvert} type="number" onChange={(e)=>{setIntrovert(e.target.value)}} />
        <input value={curious} type="number" onChange={(e)=>{setCurious(e.target.value)}} />
        <input value={tranquil} type="number" onChange={(e)=>{setTranquil(e.target.value)}} />
        <input value={independence} type="number" onChange={(e)=>{setIndependece(e.target.value)}} />
        <input value={friendly} type="number" onChange={(e)=>{setFriendly(e.target.value)}} />
      </form>
    </div>
  )
} 

export default CatEdit;