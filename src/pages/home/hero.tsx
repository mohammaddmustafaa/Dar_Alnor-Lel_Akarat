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
    <button key={element} type="button" className="sign-button btn btn-warning">
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
    <div className="hero-container">
      <ul className="heroListContainer">{listElement()}</ul>
      <div className="account-btn-container">
        {buttons()}
        {countryFlag()}
      </div>
    </div>
  );
}

export default Hero;
