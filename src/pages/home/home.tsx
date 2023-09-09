const heroList = ["Home", "Service", "Property", "About", "Contact"];

const listElement = () =>
  heroList.map((element) => (
    <li className="hero-list-element" key={element}>
      {element}
    </li>
  ));

function HeroList() {
  return (
    <>
      <ul className="heroListContainer">{listElement()}</ul>
    </>
  );
}

export default HeroList;
