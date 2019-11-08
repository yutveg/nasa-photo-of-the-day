import React from 'react';
import styled from 'styled-components';

const StyledDescript = styled.p`
    text-align: left;
    padding: 2%;
    background-image: linear-gradient(150deg, #6d6027, #d3cbb8);
    color: white;
    font-size: 1.8rem;
    margin-top: 5%;
    border-radius: 10px;
`

const Description = (props) => {
    return <StyledDescript>{props.description}</StyledDescript>
}

export default Description;