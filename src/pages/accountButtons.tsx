const accountButton = ["Sign up", "Login"];

const buttons = () =>
  accountButton.map((element) => (
    <button key={element} className="sign-button">
      {element}
    </button>
  ));

const countryFlag = () => {
  return (
    <img
      className="country-flag-img"
      src="./src/assets/ico/tunes-flag.png"
      alt="img"
    />
  );
};

function Account() {
  return (
    <>
      {buttons()}
      {countryFlag()}
    </>
  );
}

export default Account;
