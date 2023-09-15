const heroList = ["Home", "Service", "Property", "About", "Contact"];
const accountButton = ["Sign up", "Login"];

const listElement = () =>
  heroList.map((element) => (
    <li className="hero-list-element" key={element}>
      {element}
    </li>
  ));

const buttons = () =>
  accountButton.map((element) => (
    <button key={element} className="sign-button">
      {element}
    </button>
  ));

const countryFlag = () => {
  return (
    <div className="country-flag-countainer">
      <img
        className="country-flag-img"
        src="./src/assets/ico/tunes-flag.png"
        alt="img"
      />
    </div>
  );
};

function Hero() {
  return (
    <>
      <ul className="heroListContainer">{listElement()}</ul>
      <div className="account-btn-container">
        {buttons()}
        {countryFlag()}
      </div>
    </>
  );
}

export default Hero;
