import React from 'react';

const Photo = (props) => {
    return <img src={props.imgUrl} alt={props.title} className="photo" />
}

export default Photo;