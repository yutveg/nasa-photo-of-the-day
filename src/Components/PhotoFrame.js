import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Description from './description.js';
import Title from "./title.js";
import Date from "./date.js";
import Photo from "./photo.js";
import styled from 'styled-components';





const PhotoFrame = () => {
    const [obj, setObjData] = useState([]);
    const StyledPhotoFrame = styled.div`
    margin: 5% auto;
    padding: 2% 5% 2% 5%;
    background-image: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    border-radius: 15px;
`
    const HeaderFrame = styled.div`
        font-size: 2rem;
    `

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=JTwOGmJQqrXvarntcnGb294JxmW5q6ar61jW0kD5")
        .then(response => {
            setObjData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <StyledPhotoFrame className="container">
            <HeaderFrame>
                <Title title={obj.title} />
                <Date date={obj.date} />
            </HeaderFrame>
            <Photo imgUrl={obj.url} title={obj.title} />
            <Description description={obj.explanation} />
        </StyledPhotoFrame>
    )
}


export default PhotoFrame;