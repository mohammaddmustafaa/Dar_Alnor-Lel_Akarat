const heroList = ["1", "2", 3, 4];

const listElement = () =>
  heroList.map((element, index) => <li key={index}>{element}</li>);

function App() {
  return (
    <>
      <ul className="heroListContainer">{listElement()}</ul>
    </>
  );
}

export default App;
