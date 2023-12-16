import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TotalInitialstate } from "../../types";
import TextInput from "../form/TextInput";
import { postNewCatInfo, putCurCatInfo, toggleEditFlag } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";
import NumberInput from "../form/NumberInput";
import SelectboxInput from "../form/SelectboxInput";
import TextareaInput from "../form/TextareaInput";

const CatEdit = () => {
  const { selectedCat, selectedKindCode, editFlag, catKindList } = useSelector(
    (state: TotalInitialstate) => state.cat
  );
  const kindList = useMemo(()=>catKindList.map(el=>{return {dtlCd: el.kind_code, dtlNm: el.kind_name}}),[catKindList])
  const dispatch: ThunkDispatch = useDispatch();
  const [formData, setFormData] = useState({
    cat_code: "",
    cat_name: "",
    cat_age: 0,
    kind_code: "",
    description: "",
    profile: "",
    address: "",
    extrovert: "",
    introvert: "",
    curious: "",
    tranquil: "",
    independence: "",
    friendly: "",
  });
  const [updateFlag, setUpdateFlag] = useState(false);
  useEffect(() => {
    if (selectedKindCode) {
      setFormData({
        ...formData,
        kind_code: selectedKindCode,
      });
    }

    if(selectedCat.cat_code!==-1){
      setUpdateFlag(true)
    }else{
      setUpdateFlag(false)
    }
  }, []);

  const handleSaveFormData = () => {
    if(updateFlag){
      dispatch(putCurCatInfo(formData))
    }
    else{
      dispatch(postNewCatInfo(formData))
    }
  };
  const handleResetFormData = () => {
    setFormData({
      cat_code: "",
      cat_name: "",
      cat_age: 0,
      kind_code: "",
      description: "",
      profile: "",
      address: "",
      extrovert: "",
      introvert: "",
      curious: "",
      tranquil: "",
      independence: "",
      friendly: "",
    });
  };
  const handleCancel = () => {
    dispatch(toggleEditFlag(false));
  };

  return (
      <form action="" className="edit-form">
        <TextInput
          label="고양이 이름"
          value={formData.cat_name}
          onChange={setFormData}
          name="cat_name"
          formData={formData}
        />
        <NumberInput
          label="고양이 나이"
          value={formData.cat_age}
          onChange={setFormData}
          name="cat_age"
          min={0}
          max={30}
          formData={formData}
        />
        <SelectboxInput
          label="고양이 종류"
          value={formData.kind_code}
          onChange={setFormData}
          name="kind_code"
          list={kindList}
          formData={formData}
        />
        <TextareaInput
          label="고양이 소개"
          value={formData.description}
          onChange={setFormData}
          name="description"
          formData={formData}
        />
        <TextInput
          label="거주지"
          value={formData.address}
          onChange={setFormData}
          name="address"
          formData={formData}
        />
        <TextInput
          label="프로필 사진"
          value={formData.profile}
          onChange={setFormData}
          name="profile"
          formData={formData}
        />
        <NumberInput
          label="외향적"
          value={formData.extrovert}
          onChange={setFormData}
          name="extrovert"
          formData={formData}
          min={0}
          max={5}
        />
        <NumberInput
          label="내향적"
          value={formData.introvert}
          onChange={setFormData}
          name="introvert"
          formData={formData}
          min={0}
          max={5}
        />
        <NumberInput
          label="호기심"
          value={formData.curious}
          onChange={setFormData}
          name="curious"
          formData={formData}
          min={0}
          max={5}
        />
        <NumberInput
          label="조용함"
          value={formData.tranquil}
          onChange={setFormData}
          name="tranquil"
          formData={formData}
          min={0}
          max={5}
        />
        <NumberInput
          label="독림심"
          value={formData.independence}
          onChange={setFormData}
          name="independence"
          formData={formData}
          min={0}
          max={5}
        />
        <NumberInput
          label="친근함"
          value={formData.friendly}
          onChange={setFormData}
          name="friendly"
          formData={formData}
          min={0}
          max={5}
        />

      <ul className="edit-button-wrap">
        <button
          type="button"
          className="edit-button"
          onClick={handleSaveFormData}
        >
          Save
        </button>
        <button
          type="button"
          className="edit-button jh-mx-xs"
          onClick={handleResetFormData}
        >
          Reset
        </button>
        <button
          type="button"
          className="edit-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </ul>
      </form>
  );
};

export default CatEdit;
