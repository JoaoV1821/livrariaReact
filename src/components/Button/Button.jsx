import React from 'react'
import style from './Button.module.css'
import styled from 'styled-components'

const Button = ({ text, clickHandler }) => {
    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
    `;

    return (
        <Button primary onClick={clickHandler}>{text}</Button>
    )
}

export default Button