const login = { Name: "Name", Email: "Email", "Phone Number": "Phone Number" };
const inputType = ["text", "email", "number"];
const placeholder = ["name", "........@email.com", "*****"];
const buttons = ["Create account", "Continue with Google"];

const title = () =>
  Object.keys(login).map((value, index) => (
    <div className="label-container">
      <label className="login-label">{value}</label>
      <input
        placeholder={placeholder[index]}
        key={value}
        className="login-input"
        type={inputType[index]}
      />
    </div>
  ));
const btn = () =>
  buttons.map((btn) => <button className="account-login-btns">{btn}</button>);

function Login() {
  return (
    <div className="login-div-container">
      <form className="login-container">
        {title()}
        {btn()}
      </form>
      {/* //! backGround Image right Bottom // ??????????????????? */}
      {/* <div className="cmpny-icon-container"> */}
      {/* <img className="cmpny-icon" src="src/assets/Sans-titre.png" /> */}
      {/* </div> */}
      {/* // ??????????????????? */}
    </div>
  );
}

export default Login;
