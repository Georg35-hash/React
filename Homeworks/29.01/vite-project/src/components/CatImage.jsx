import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../src/styles/CatImage.module.css"
const CatImage = () => {
    const [imageUrl, setImageUrl] = useState("");

    const fetchCatImage = async () => {
        try {
            const {data} = await axios.get("https://api.thecatapi.com/v1/images/search");
            setImageUrl(data[0].url);
        } catch (error) {
            console.error("Error of loading", error);
        }
    };

    useEffect(() => {
        fetchCatImage();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Zufälliges Bild</h1>
            {imageUrl && <img className={styles.image}src={imageUrl} alt="Random Cat" />}
            <button className={styles.button} onClick={fetchCatImage}>Das neue Foto herunterladen</button>
        </div>
    );
};

export default CatImage;
