import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex-grow-1" style={{ marginTop: "80px" }}>
        <ItemListContainer greeting="¡Bienvenido Impío a Las Puertas del Olimpo!" />
      </main>
      <Footer />
    </>
  );
}

export default App;
