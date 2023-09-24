import { useCallback, useState } from "react";

const CustomKeyboard = ({ inputValue, setInputValue, setIsOpen }) => {
  const [isShift, setIsShift] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const closeVirtualKeyboard = () => {
    setIsOpen(false);
  };
  const toggleIsShift = () => {
    setIsShift(!isShift);
  };
  const toggleIsEnglish = () => {
    setIsEnglish(!isEnglish);
  };
  const switchKey = useCallback(
    (key) => {
      switch (key) {
        case "q":
          if (!isShift && !isEnglish) return "ㅂ";
          else if (isShift && !isEnglish) return "ㅃ";
          else if (isShift && isEnglish) return "Q";
          else return "q";
        case "w":
          if (!isShift && !isEnglish) return "ㅈ";
          else if (isShift && !isEnglish) return "ㅉ";
          else if (isShift && isEnglish) return "W";
          else return "w";
        case "e":
          if (!isShift && !isEnglish) return "ㄷ";
          else if (isShift && !isEnglish) return "ㄸ";
          else if (isShift && isEnglish) return "E";
          else return "e";
        case "r":
          if (!isShift && !isEnglish) return "ㄱ";
          else if (isShift && !isEnglish) return "ㄲ";
          else if (isShift && isEnglish) return "R";
          else return "r";
        case "t":
          if (!isShift && !isEnglish) return "ㅅ";
          else if (isShift && !isEnglish) return "ㅆ";
          else if (isShift && isEnglish) return "T";
          else return "t";
        case "y":
          if (!isShift && !isEnglish) return "ㅛ";
          else if (isShift && !isEnglish) return "ㅛ";
          else if (isShift && isEnglish) return "Y";
          else return "y";
        case "u":
          if (!isShift && !isEnglish) return "ㅕ";
          else if (isShift && !isEnglish) return "ㅕ";
          else if (isShift && isEnglish) return "U";
          else return "u";
        case "i":
          if (!isShift && !isEnglish) return "ㅑ";
          else if (isShift && !isEnglish) return "ㅑ";
          else if (isShift && isEnglish) return "I";
          else return "i";
        case "o":
          if (!isShift && !isEnglish) return "ㅐ";
          else if (isShift && !isEnglish) return "ㅐ";
          else if (isShift && isEnglish) return "O";
          else return "o";
        case "p":
          if (!isShift && !isEnglish) return "ㅔ";
          else if (isShift && !isEnglish) return "ㅔ";
          else if (isShift && isEnglish) return "P";
          else return "p";
        case "[":
          if (!isShift && !isEnglish) return "[";
          else if (isShift && !isEnglish) return "{";
          else if (isShift && isEnglish) return "{";
          else return "[";
        case "]":
          if (!isShift && !isEnglish) return "]";
          else if (isShift && !isEnglish) return "}";
          else if (isShift && isEnglish) return "}";
          else return "]";
        case "\\":
          return "\\";
        // 2줄
        case "a":
          if (!isShift && !isEnglish) return "ㅁ";
          else if (isShift && !isEnglish) return "ㅁ";
          else if (isShift && isEnglish) return "A";
          else return "a";
        case "s":
          if (!isShift && !isEnglish) return "ㄴ";
          else if (isShift && !isEnglish) return "ㄴ";
          else if (isShift && isEnglish) return "S";
          else return "s";
        case "d":
          if (!isShift && !isEnglish) return "ㅇ";
          else if (isShift && !isEnglish) return "ㅇ";
          else if (isShift && isEnglish) return "D";
          else return "d";
        case "f":
          if (!isShift && !isEnglish) return "ㄹ";
          else if (isShift && !isEnglish) return "ㄹ";
          else if (isShift && isEnglish) return "F";
          else return "f";
        case "g":
          if (!isShift && !isEnglish) return "ㅎ";
          else if (isShift && !isEnglish) return "ㅎ";
          else if (isShift && isEnglish) return "G";
          else return "g";
        case "h":
          if (!isShift && !isEnglish) return "ㅗ";
          else if (isShift && !isEnglish) return "ㅗ";
          else if (isShift && isEnglish) return "H";
          else return "h";
        case "j":
          if (!isShift && !isEnglish) return "ㅓ";
          else if (isShift && !isEnglish) return "ㅓ";
          else if (isShift && isEnglish) return "J";
          else return "j";
        case "k":
          if (!isShift && !isEnglish) return "ㅏ";
          else if (isShift && !isEnglish) return "ㅏ";
          else if (isShift && isEnglish) return "K";
          else return "k";
        case "l":
          if (!isShift && !isEnglish) return "ㅣ";
          else if (isShift && !isEnglish) return "ㅣ";
          else if (isShift && isEnglish) return "L";
          else return "l";
        case ";":
          if (!isShift && !isEnglish) return ";";
          else if (isShift && !isEnglish) return ":";
          else if (isShift && isEnglish) return ":";
          else return ";";
        case "'":
          if (!isShift && !isEnglish) return "'";
          else if (isShift && !isEnglish) return '"';
          else if (isShift && isEnglish) return '"';
          else return "'";
        // 3줄
        case "z":
          if (!isShift && !isEnglish) return "ㅋ";
          else if (isShift && !isEnglish) return 'ㅋ';
          else if (isShift && isEnglish) return 'Z';
          else return "z";
        case "x":
          if (!isShift && !isEnglish) return "ㅌ";
          else if (isShift && !isEnglish) return 'ㅌ';
          else if (isShift && isEnglish) return 'X';
          else return "x";
        case "c":
          if (!isShift && !isEnglish) return "ㅍ";
          else if (isShift && !isEnglish) return 'ㅍ';
          else if (isShift && isEnglish) return 'C';
          else return "c";
        case "v":
          if (!isShift && !isEnglish) return "ㅍ";
          else if (isShift && !isEnglish) return 'ㅍ';
          else if (isShift && isEnglish) return 'V';
          else return "v";
        case "b":
          if (!isShift && !isEnglish) return "ㅠ";
          else if (isShift && !isEnglish) return 'ㅠ';
          else if (isShift && isEnglish) return 'B';
          else return "b";
        case "n":
          if (!isShift && !isEnglish) return "ㅜ";
          else if (isShift && !isEnglish) return 'ㅜ';
          else if (isShift && isEnglish) return 'N';
          else return "n";
        case "m":
          if (!isShift && !isEnglish) return "ㅡ";
          else if (isShift && !isEnglish) return 'ㅡ';
          else if (isShift && isEnglish) return 'M';
          else return "m";
        case ",":
          if (!isShift && !isEnglish) return ",";
          else if (isShift && !isEnglish) return '<';
          else if (isShift && isEnglish) return '<';
          else return ",";
        case ".":
          if (!isShift && !isEnglish) return ".";
          else if (isShift && !isEnglish) return '>';
          else if (isShift && isEnglish) return '>';
          else return ".";
        case "/":
          if (!isShift && !isEnglish) return "/";
          else if (isShift && !isEnglish) return '?';
          else if (isShift && isEnglish) return '?';
          else return "/";
        default:
          return key;
      }
    },
    [isEnglish, isShift]
  );

  return (
    <div className="virtual-keyboard-wrap">
      <div className="keyboard-header">
        <span className="keyboard-lang-status">{isEnglish ? "영어" : "한글"}</span>
        <button className="keyboard-close-button" onClick={closeVirtualKeyboard}>
          X
        </button>
      </div>
      <div className="keyboard-body">
        <ul className="keyboard-row">
          <li className="keyboard-key">{isShift ? "~" : "`"}</li>
          <li className="keyboard-key">{isShift ? "!" : "1"}</li>
          <li className="keyboard-key">{isShift ? "@" : "2"}</li>
          <li className="keyboard-key">{isShift ? "#" : "3"}</li>
          <li className="keyboard-key">{isShift ? "$" : "4"}</li>
          <li className="keyboard-key">{isShift ? "%" : "5"}</li>
          <li className="keyboard-key">{isShift ? "^" : "6"}</li>
          <li className="keyboard-key">{isShift ? "^" : "7"}</li>
          <li className="keyboard-key">{isShift ? "&" : "8"}</li>
          <li className="keyboard-key">{isShift ? "*" : "9"}</li>
          <li className="keyboard-key">{isShift ? "(" : "0"}</li>
          <li className="keyboard-key">{isShift ? "_" : "-"}</li>
          <li className="keyboard-key">{isShift ? "+" : "="}</li>
          <li className="keyboard-key keyboard-backspace">back</li>
        </ul>
        <ul className="keyboard-row">
          <li className="keyboard-key">{switchKey("q")}</li>
          <li className="keyboard-key">{switchKey("w")}</li>
          <li className="keyboard-key">{switchKey("e")}</li>
          <li className="keyboard-key">{switchKey("r")}</li>
          <li className="keyboard-key">{switchKey("t")}</li>
          <li className="keyboard-key">{switchKey("y")}</li>
          <li className="keyboard-key">{switchKey("u")}</li>
          <li className="keyboard-key">{switchKey("i")}</li>
          <li className="keyboard-key">{switchKey("o")}</li>
          <li className="keyboard-key">{switchKey("p")}</li>
          <li className="keyboard-key">{switchKey("[")}</li>
          <li className="keyboard-key">{switchKey("]")}</li>
          <li className="keyboard-key">{switchKey("\\")}</li>
        </ul>
        <ul className="keyboard-row">
          <li className="keyboard-key keyboard-lang" onClick={toggleIsEnglish}>
            한/영
          </li>
          <li className="keyboard-key">{switchKey('a')}</li>
          <li className="keyboard-key">{switchKey('s')}</li>
          <li className="keyboard-key">{switchKey('d')}</li>
          <li className="keyboard-key">{switchKey('f')}</li>
          <li className="keyboard-key">{switchKey('g')}</li>
          <li className="keyboard-key">{switchKey('h')}</li>
          <li className="keyboard-key">{switchKey('j')}</li>
          <li className="keyboard-key">{switchKey('k')}</li>
          <li className="keyboard-key">{switchKey('l')}</li>
          <li className="keyboard-key">{switchKey(';')}</li>
          <li className="keyboard-key">{switchKey("'")}</li>
        </ul>
        <ul className="keyboard-row">
          <li className="keyboard-key keyboard-shift" onClick={toggleIsShift}>shift</li>
          <li className="keyboard-key">{switchKey('z')}</li>
          <li className="keyboard-key">{switchKey('x')}</li>
          <li className="keyboard-key">{switchKey('c')}</li>
          <li className="keyboard-key">{switchKey('v')}</li>
          <li className="keyboard-key">{switchKey('b')}</li>
          <li className="keyboard-key">{switchKey('n')}</li>
          <li className="keyboard-key">{switchKey('m')}</li>
          <li className="keyboard-key">{switchKey(',')}</li>
          <li className="keyboard-key">{switchKey('.')}</li>
          <li className="keyboard-key">{switchKey('/')}</li>
          <li className="keyboard-key keyboard-shift" onClick={toggleIsShift}>shift</li>
        </ul>
        <ul className="keyboard-row">
          <li className="keyboard-key keyboard-reset">초기화</li>
          <li className="keyboard-key keyboard-space jh-mx-xs">space</li>
          <li className="keyboard-key keyboard-search">검색</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomKeyboard;
