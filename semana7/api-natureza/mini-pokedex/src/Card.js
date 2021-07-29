import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 500px;
    width: 400px;
    /* border: 1px solid black; */
    background-color: whitesmoke;
    margin-top: 50px;
    box-shadow: 0 0 5px 3px lightcoral;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    > img {
        width: 150px
    }
`
class Card extends React.Component {

    render() {

        const {name, abilities, types, sprites} = this.props.pokemon

        return (
            <Container>
                <Header>
                    <img src={sprites.front_default} alt="Foto Pokémon"></img>
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                </Header>
            </Container>
        )
    }
}

export default Card