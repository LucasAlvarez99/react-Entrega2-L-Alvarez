
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ContactPage from "./components/ContactPage";
import AdminPage from "./components/AdminPage";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="flex-grow-1" style={{ marginTop: "80px", minHeight: "calc(100vh - 200px)" }}>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido Impío a Las Puertas del Olimpo!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={
            <div className="container text-center py-5">
              <h1>404 - Página no encontrada</h1>
              <p>La página que buscas no existe</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;