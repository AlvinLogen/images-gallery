import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const UNSPLASH_API = "https://api.unsplash.com";
const UNSPLASH_PATH = "/photos/random/";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(word);

    fetch(
      `${UNSPLASH_API}${UNSPLASH_PATH}?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((error) => {
        console.log(error);
      });

    setWord("");
  }

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
