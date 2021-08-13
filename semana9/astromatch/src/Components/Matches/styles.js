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
    }

    > p {
        margin-right: 162px;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
`

export const ContainerMatch = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    /* justify-content: flex-start; */

    > img {
        max-width: 50px;
        margin-right: 10px;
        border-radius: 5px;
    }
`