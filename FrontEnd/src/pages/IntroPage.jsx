import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="intro-page blinking">
      <div className="coverBox card-demo">
        <Link id="step1" className="titleBox" to={"catList"}>
          <h1 className="openingTitle card-demo-link">Let's Go</h1>
          <p id="step2">Search Cats</p>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
