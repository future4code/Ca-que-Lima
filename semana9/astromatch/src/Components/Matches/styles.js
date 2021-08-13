import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 400px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
        margin-left: 10px;
        &:hover {
            cursor: pointer;
        }
    }

    > p {
        margin-right: 146px;
        font-style: italic;
        font-weight: 600;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    min-height: 500px;
    overflow-y: scroll;
`

export const ContainerMatch = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;

    > img {
        max-width: 50px;
        margin-right: 10px;
        border-radius: 5px;
    }

    > P {
        font-size: 1.2rem;
    }
`