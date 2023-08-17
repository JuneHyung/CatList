import catList from "../../assets/data/catList.json";
import { useState } from "react";
import CatKindList from "./CatKindList";
import CatList from "./CatList";

const CatListArea = () => {
  const [selectedKind, setSelectedKind ]= useState('');

  return (
    <div className="cat-list-wrap">
      <CatKindList catList={catList} selectedKind={selectedKind} handleKind={setSelectedKind}/>
      <CatList catList={catList} selectedKind={selectedKind} />
    </div>
  );
};
export default CatListArea;
