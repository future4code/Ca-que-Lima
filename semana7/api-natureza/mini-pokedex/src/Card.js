import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 450px;
    width: 400px;
    /* border: 1px solid black; */
    background-color: whitesmoke;
    margin-top: 50px;
    box-shadow: 0 0 5px 3px lightcoral;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -50px;
    > img {
        width: 150px
    }
`

const Bar = styled.hr`
    width: 85%;
`

const DataContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
`
class Card extends React.Component {

    render() {

        const { name, abilities, types, sprites, weight, height } = this.props.pokemon

        const abilitiesList = abilities.map(ability => {
            return <li key={ability.slot}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</li>
        })

        const typeList = types.map(type => {
            return <li key={type.slot}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</li>
        })
        return (
            <Container>
                <Header>
                    <img src={sprites.front_default} alt="Foto Pokémon"></img>
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                </Header>
                <DataContainer>
                    <div>
                        <p><b>Tipos:</b></p>
                        {typeList}
                    </div>
                    <div>
                        <p><b>Habilidades:</b></p>
                        {abilitiesList}
                    </div>
                </DataContainer>
                <br />
                <Bar/>
                <DataContainer>
                    <div>
                        <p><b>Altura:</b></p>
                        {`${height / 10} metros`}
                    </div>
                    <div>
                        <p><b>Peso:</b></p>
                        {`${weight / 10} quilos`}
                    </div>
                </DataContainer>
            </Container>
        )
    }
}

export default Card