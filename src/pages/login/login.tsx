const login = { Name: "Name", Email: "Email", "Phone Number": "Phone Number" };

const title = () =>
  Object.keys(login).map(
    (value, key) => (
      <form className="login-container">
        <label className="login-label">{value}</label>
        <input key={key} className="login-input"></input>
      </form>
    ),
    console.log("wtf")
  );

function Login() {
  return <div className="login-div-container">{title()}</div>;
}

export default Login;
