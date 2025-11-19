import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productsData from "../data/products.json";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    // Simulamos una llamada asíncrona con Promise
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 1000);
    });

    getProducts.then((data) => {
      if (categoryId) {
        const filteredProducts = data.filter(
          (product) => product.category === categoryId
        );
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <Container className="py-4">
      {greeting && (
        <div className="text-center mb-4">
          <h2 className="display-5 fw-bold">{greeting}</h2>
          <p className="lead text-muted">
            ¡Elige a que purgatorio irás en las próximas fechas!
          </p>
        </div>
      )}

      {categoryId && (
        <h3 className="mb-4 text-capitalize">
          Categoría: {categoryId.replace("-", " ")}
        </h3>
      )}

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Cargando productos...</p>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
}

export default ItemListContainer;