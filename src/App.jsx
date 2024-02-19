

import Card from "./Card";
import Button from "./Button";
import Counter from "./Counter";
import OnChangeComponent from "./OnChange";
import ColorPicker from "./ColorPicker";
import UpdateObject from "./UpdateObjects";
import UpdateArray from "./UpdateArray";
import UpdateArrayOfObjects from "./UpdateArrayofObjects";
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

      <Card name="The John" description="A certified bad ass when it comes to mastering crazy libraries in a matter of minutes!!!!!" />
      <Card name="Coiler" description="Self-acquinted top artist who drops bangers after bangfers" />
      <Card name="Bruno Fernandes" description="A very bad ass Manchester United midfielder who averages 65g/a per season" />
      <p></p>


      {/* {cars.length > 0 && <List motors={cars} category="Cars" />} */}
      {/* {companies.length > 0 ? <List motors={companies} category="Phones" /> : null} */}


      <Button />
      <p></p>
      <Counter />
      <p></p>
      <p></p>
      <OnChangeComponent />
      <p></p>
      <ColorPicker />
      <UpdateObject />
      <br />
      <UpdateArray />
      <UpdateArrayOfObjects/>
    </>
  );
}

export default App
