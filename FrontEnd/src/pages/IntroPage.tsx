import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
      <div className="intro-wrap-box">
        <Link id="step1" className="intro-logo" to={"catList"}>
            <img src={require('./../assets/images/intro-logo.png')} alt='logo'></img>
        </Link>
      </div>
  );
};

export default IntroPage;
