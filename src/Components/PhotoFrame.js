import React, { useState, useEffect } from 'react';
import Photo from "./Photo.js";
import axios from 'axios';

const PhotoFrame = () => {
    const [imgUrl, setImgUrl] = useState([]);
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=JTwOGmJQqrXvarntcnGb294JxmW5q6ar61jW0kD5")
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <div className="container">
            <h1>Nasa Photo Of The Day</h1>
            <Photo src={imgUrl} />

        </div>
    )
}

export default PhotoFrame;