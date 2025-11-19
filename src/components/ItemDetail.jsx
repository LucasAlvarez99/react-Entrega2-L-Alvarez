import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function ItemDetail({ product }) {
  const [selectedSpace, setSelectedSpace] = useState(product.spaces[0]);
  const [selectedMerchandise, setSelectedMerchandise] = useState([]);

  const priceWithService = (selectedSpace.price * 1.1).toFixed(0);

  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} x ${selectedSpace.name}`);
    alert(`Se agregó ${quantity} entrada(s) de ${selectedSpace.name} al carrito`);
  };

  const handleAddMerchandise = (item) => {
    const exists = selectedMerchandise.find((m) => m.id === item.id);
    if (exists) {
      setSelectedMerchandise(
        selectedMerchandise.filter((m) => m.id !== item.id)
      );
    } else {
      setSelectedMerchandise([...selectedMerchandise, item]);
    }
  };

  return (
    <Row className="g-4">
      {/* CARRUSEL DE IMÁGENES */}
      <Col md={6}>
        <Card className="shadow">
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`${product.title} - ${index + 1}`}
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Card>
      </Col>

      {/* INFORMACIÓN DEL SHOW */}
      <Col md={6}>
        <h2 className="mb-3">{product.title}</h2>

        <div className="mb-3">
          <Badge bg="info" className="me-2">
            {product.artist}
          </Badge>
          <Badge bg="secondary">{product.type}</Badge>
        </div>

        <p className="text-muted">
          <strong>📅 Fecha:</strong>{" "}
          {new Date(product.date).toLocaleDateString("es-AR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="text-muted">
          <strong>📍 Lugar:</strong> {product.venue}
        </p>

        <hr />

        {/* SELECCIÓN DE ESPACIO */}
        <h5 className="mb-3">Selecciona tu ubicación</h5>
        <div className="mb-4">
          {product.spaces.map((space) => (
            <div
              key={space.name}
              className={`p-3 mb-2 border rounded cursor-pointer ${
                selectedSpace.name === space.name
                  ? "border-primary bg-light"
                  : ""
              }`}
              onClick={() => setSelectedSpace(space)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{space.name}</strong>
                  <small className="d-block text-muted">
                    Disponibles: {space.stock}
                  </small>
                </div>
                <div className="text-end">
                  <strong className="text-success">
                    ${(space.price * 1.1).toFixed(0).toLocaleString()}
                  </strong>
                  <small className="d-block text-muted">
                    + service charge
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTADOR Y AGREGAR AL CARRITO */}
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <h6 className="mb-3">Cantidad de entradas</h6>
            <ItemCount stock={selectedSpace.stock} initial={1} onAdd={handleAddToCart} />
          </Card.Body>
        </Card>

        {/* MERCHANDISE */}
        {product.merchandise && product.merchandise.length > 0 && (
          <>
            <h5 className="mb-3">Agregar Merchandise</h5>
            <Row className="g-2">
              {product.merchandise.map((item) => {
                const isSelected = selectedMerchandise.find(
                  (m) => m.id === item.id
                );
                return (
                  <Col xs={6} key={item.id}>
                    <Card
                      className={`text-center ${
                        isSelected ? "border-success" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleAddMerchandise(item)}
                    >
                      <Card.Body className="p-2">
                        <p className="mb-1 small fw-bold">{item.name}</p>
                        <p className="mb-1 text-success">
                          ${item.price.toLocaleString()}
                        </p>
                        <small className="text-muted">
                          Stock: {item.stock}
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>

            {selectedMerchandise.length > 0 && (
              <Button
                variant="success"
                className="w-100 mt-3"
                onClick={() => {
                  console.log("Merchandise agregado:", selectedMerchandise);
                  alert("Merchandise agregado al carrito");
                }}
              >
                Agregar Merchandise al Carrito
              </Button>
            )}
          </>
        )}
      </Col>
    </Row>
  );
}

export default ItemDetail;