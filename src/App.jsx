// import Header from "./Header"
// import Footer from "./Footer";
import Games from "./Games";
import Card from "./Card";
import Button from "./Button";

function App() {
  return (
    <>


      <Card name="The John" description="A certified bad ass when it comes to mastering crazy libraries in a matter of minutes!!!!!" />
      <Card name="Coiler" description="Self-acquinted top artist who drops bangers after bangfers" />
      <Card name="Bruno Fernandes" description="A very bad ass Manchester United midfielder who averages 65g/a per season"/>
      <p></p>

      <Games name="PUBG" year="2017" isHot={true} />
      <Games name="COD" year="2015" isHot="hell" />
      <Button />
    </>
  );
}

export default App
