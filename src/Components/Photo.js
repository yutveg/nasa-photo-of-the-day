import React from 'react';
import styled from 'styled-components';

const ImgFrame = styled.div`
    border-radius: 15px;
    overflow: hidden;
    margin: 0 auto;
    height: 400px;
    box-shadow: 0 0 8px 2px $shadow-;
`

const Photo = (props) => {
    return <ImgFrame className="photoframe">
               <img src={props.imgUrl} alt={props.title} style={{position: 'relative', top: '-50%', left: '-7.5%'}}/>

           </ImgFrame>
}

export default Photo;