import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Description from './description.js';
import Title from "./title.js";
import Date from "./date.js";
import Photo from "./photo.js";

const PhotoFrame = () => {
    const [imgUrl, setImgUrl] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=JTwOGmJQqrXvarntcnGb294JxmW5q6ar61jW0kD5")
        .then(response => {
            setImgUrl(response.data.url);
            setTitle(response.data.title);
            setDescription(response.data.explanation);
            setDate(response.data.date);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <div className="container">
            <Title title={title} />
            <Date date={date} />
            <Photo imgUrl={imgUrl} title={title} />
            <Description description={description} />
        </div>
    )
}

export default PhotoFrame;