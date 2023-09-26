import { useCallback, useState } from "react";
import hangul from "hangul-js";
import { enBig, enSmall, keyboardSetting, koBig, koSmall } from "../../stores/constant/keyboard";

const CustomKeyboard = ({inputValue, setInputValue, setIsOpen, handleClickSearch,}) => {
  const [isShift, setIsShift] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const closeVirtualKeyboard = () => {
    setIsOpen(false);
  };

  const switchKey = useCallback(
    (key) => {
      if (!isShift && !isEnglish) return koSmall[key];
      else if (isShift && !isEnglish) return koBig[key];
      else if (isShift && isEnglish) return enBig[key];
      else return enSmall[key];
    },
    [isShift, isEnglish]
  );

  const handleKeyClassName = useCallback(
    (key) => {
      switch (key) {
        case 'reset':
          return 'keyboard-key keyboard-reset'
        case 'space':
          return 'keyboard-key keyboard-space jh-mx-sm'
        case 'search':
          return 'keyboard-key keyboard-search'
        case 'shift':
          return 'keyboard-key keyboard-shift'
        case 'lang':
          return 'keyboard-key keyboard-lang'
        case 'back':
          return 'keyboard-key keyboard-backspace'
        default:
          return 'keyboard-key'
      }
    },[]
  );

  const handleKeyClick = useCallback(
    (key) => {
      switch (key) {
        case 'reset':
          setInputValue("")
          break;
        case 'space':
          setInputValue(hangul.assemble(inputValue + " "))
          break;
        case 'search':
          handleClickSearch();
          break;
        case 'shift':
          setIsShift(!isShift);
          break;
        case 'lang':
          setIsEnglish(!isEnglish);
          break;
        case 'back':
          setInputValue(inputValue.slice(0, inputValue.length - 1));
          break;
        default:
          setInputValue(hangul.assemble(inputValue + switchKey(key)));
          break;
      }
    },
    [inputValue, setInputValue, isEnglish, isShift, handleClickSearch, switchKey]
  );

  return (
    <div className="virtual-keyboard-wrap">
      <div className="keyboard-header">
        <span className="keyboard-lang-status">
          {isEnglish ? "영어" : "한글"}
        </span>
        <button
          className="keyboard-close-button"
          onClick={closeVirtualKeyboard}
        >
          X
        </button>
      </div>
      <div className="keyboard-body">
        {keyboardSetting.map((row, rowIdx) => {
          return (
            <ul className="keyboard-row" key={rowIdx}>
              {row.map((k, kIdx) => {
                return (
                  <li
                    className={handleKeyClassName(k)}
                    onClick={() => handleKeyClick(k)}
                    key={kIdx}
                  >
                    {switchKey(k)}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default CustomKeyboard;
