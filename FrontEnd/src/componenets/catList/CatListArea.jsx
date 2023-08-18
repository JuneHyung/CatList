import CatKindList from "./CatKindList";
import CatList from "./CatList";
import CatDetail from "./CatDetail"
import { useSelector } from "react-redux";
const CatListArea = () => {
  const {selectedCat} = useSelector((state)=> state.cat);
  
  return (
    <div className="cat-list-wrap">
      <CatKindList />
      {
        selectedCat.catNo===undefined ? <CatList /> : <CatDetail />      
      }
    </div>
  );
};
export default CatListArea;
