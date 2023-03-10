import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const UNSPLASH_API = "https://api.unsplash.com";
const UNSPLASH_PATH = "/photos/random";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    fetch(
      `${UNSPLASH_API}${UNSPLASH_PATH}?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((error) => {
        console.log(error);
      });

    setWord("");
  }

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
