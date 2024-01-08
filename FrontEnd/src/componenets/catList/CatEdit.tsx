import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TotalInitialstate } from "../../types";
import TextInput from "../form/TextInput";
import { postNewCatInfo, putCurCatInfo, toggleEditFlag } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";
import NumberInput from "../form/NumberInput";
import SelectboxInput from "../form/SelectboxInput";
import TextareaInput from "../form/TextareaInput";
import { CatInfo, CharcInfo } from "../../types/cat";

const CatEdit = () => {
  const { selectedCat, selectedKindCode, selectedCharc, catKindList } = useSelector(
    (state: TotalInitialstate) => state.cat
  );
  const kindList = useMemo(()=>catKindList.map(el=>{return {dtlCd: el.kind_code, dtlNm: el.kind_name}}),[catKindList])
  const dispatch: ThunkDispatch = useDispatch();
  const [formData, setFormData] = useState<Partial<CatInfo & CharcInfo>>({
    cat_code: -1,
    cat_name: "",
    cat_age: 0,
    kind_code: "",
    description: "",
    profile: "",
    address: "",
    extrovert: -1,
    introvert: -1,
    curious: -1,
    tranquil: -1,
    independence: -1,
    friendly: -1,
  });
  const [updateFlag, setUpdateFlag] = useState(false);
  useEffect(() => {
    // 종류 선택해서 조회 후 edit인 경우 해당 종류 세팅
    if (selectedKindCode) {
      setFormData({
        ...formData,
        kind_code: selectedKindCode,
      });
    }

    // 선택한 고양이값이 있으면,
    if(selectedCat.cat_code!==-1){
      const unionData = {...selectedCat, ...selectedCharc};
      setFormData({...unionData})
      setUpdateFlag(true)
    }else{
      setUpdateFlag(false)
    }
  }, []);

  // 저장 시 updateFlag에 따라 다른 method
  const handleSaveFormData = () => {
    if(updateFlag){
      dispatch(putCurCatInfo(formData))
    }
    else{
      dispatch(postNewCatInfo(formData))
    }
  };

  // 폼데이터 초기화.
  const handleResetFormData = () => {
    setFormData({
      cat_code: -1,
      cat_name: "",
      cat_age: 0,
      kind_code: "",
      description: "",
      profile: "",
      address: "",
      extrovert: -1,
      introvert: -1,
      curious: -1,
      tranquil: -1,
      independence: -1,
      friendly: -1,
    });
  };
  const handleCancel = () => {
    dispatch(toggleEditFlag(false));
  };

  return (
    <div className="cat-edit-page">
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
          value={formData.profile as string}
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
          {updateFlag ? "Update" : "Save"}
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
      </div>
  );
};

export default CatEdit;
