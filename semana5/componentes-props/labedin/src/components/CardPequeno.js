import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
    width: 512px;

    > img {
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;
    }

    > p {
        margin-left: 5px;
    }
`;

function CardPequeno(props) {
    return (
        <Container>
            <img src={ props.imagem } alt="" />
            <h4>{ props.titulo }</h4>
            <p>{ props.texto }</p>
        </Container>
            
    )
}

export default CardPequeno;