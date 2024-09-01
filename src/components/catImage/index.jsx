import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

function CatImage() {
  const [cats, setCats] = useState([]);

  async function fetchApiCat() {
    try {
      const data = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCats(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiCat();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Randome Cat Image</h1>
      {cats.map((cat) => {
        return (
          <img
            key={cat.id}
            src={cat.url}
            alt="cat"
            className={styles.cat_image}
          />
        );
      })}
      <button onClick={fetchApiCat} className={styles.btn}>
        Load new image
      </button>
    </div>
  );
}

export default CatImage;
