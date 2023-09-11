const heroList = ["Home", "Service", "Property", "About", "Contact"];
const keyboardIpad = ['Test', 'NewKybboard', 'Github-DeskSpace'];
const listElement = () =>
  heroList.map((element) => (
    <li className="hero-list-element" key={element}>
      {element}
    </li>
  ));

function HeroList() {
  return (
    <>
      <ul className="heroListContainer">
        {listElement()}
        {keyboardIpad}
        </ul>
    </>
  );
}

export default HeroList;
