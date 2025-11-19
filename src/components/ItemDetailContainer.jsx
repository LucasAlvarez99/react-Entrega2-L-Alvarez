import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productsData from "../data/products.json";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // Simulamos una llamada asíncrona con Promise
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundProduct = productsData.find((p) => p.id === itemId);
        if (foundProduct) {
          resolve(foundProduct);
        } else {
          reject(new Error("Producto no encontrado"));
        }
      }, 1000);
    });

    getProduct
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Cargando producto...</p>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-5">
        <Alert variant="warning">
          <Alert.Heading>Producto no encontrado</Alert.Heading>
          <p>El producto que buscas no existe o fue eliminado.</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <ItemDetail product={product} />
    </Container>
  );
}

export default ItemDetailContainer;