const accountButton = ["Sign up", "Login"];

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

function Account() {
  return (
    <div className="account-btn-container">
      {buttons()}
      {countryFlag()}
    </div>
  );
}

export default Account;
