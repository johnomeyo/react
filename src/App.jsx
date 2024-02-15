// import Header from "./Header"
// import Footer from "./Footer";
import Games from "./Games";
import Card from "./Card";
import Button from "./Button";
import Greetings from "./Greetings";
import List from "./List";
function App() {
  const cars = [
    { name: "BMW", year: 2015, id: 1 },
    { name: "Mercedes", year: 2004, id: 2 },
    { name: "Audi", year: 2003, id: 3 },
    { name: "Porsche", year: 1964, id: 4 },
    { name: "Tesla", year: 2022, id: 5 },
  ];
  const companies = [

  ];

  return (
    <>
      <Greetings isLoggedIn={true} />
      <Greetings isLoggedIn={true} username="The Goat" />
      <Card name="The John" description="A certified bad ass when it comes to mastering crazy libraries in a matter of minutes!!!!!" />
      <Card name="Coiler" description="Self-acquinted top artist who drops bangers after bangfers" />
      <Card name="Bruno Fernandes" description="A very bad ass Manchester United midfielder who averages 65g/a per season" />
      <p></p>

      <Games name="PUBG" year="2017" isHot={true} />
      <Games name="COD" year="2015" isHot="hell" />
      {cars.length > 0 && <List motors={cars} category="Cars" />}
      {companies.length > 0 ? <List motors={companies} category="Phones" /> : null}

      <p></p>
      <Button />
    </>
  );
}

export default App
