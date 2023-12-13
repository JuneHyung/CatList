import { useDispatch } from "react-redux";
import { toggleEditFlag } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";

const CatPlusButton = () => {
  const dispatch: ThunkDispatch = useDispatch();

  return (
    <div className="plus-item-button jh-my-xs" onClick={()=>dispatch(toggleEditFlag(true))}>PLUS ITEM</div>
  )
}

export default CatPlusButton;