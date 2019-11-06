import React from 'react';

const Photo = (props) => {
    return (
        <div className="photoContainer">
            <img src={props.imgUrl} className="photo" alt="NASA daily post" />
        </div>
    )
}

export default Photo;