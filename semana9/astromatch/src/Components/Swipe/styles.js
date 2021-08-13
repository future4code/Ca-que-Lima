import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-rows: 50px 450px 100px;
    height: 600px;
    width: 400px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
        margin-left: 70px;
        &:hover {
            cursor: pointer;
        }
    }

    > p {
        margin-left: 140px;
        font-style: italic;
        font-weight: 600;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    width: 100%;
    height: 500px;

    > img {
        max-width: 100%;
        max-height: 300px;
    }

    > div {
        align-self: flex-start;
        min-width: 360px;
        background-color: lightgrey;
        padding: 20px;
    }

    h4 {
        display: inline;
    }
`


export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    > button {
        padding: 10px;
        color: white;
        border: none;
        border-radius: 5px;
        transition: 0.3s;

        &:hover {
            cursor: pointer;
            padding: 15px;
        }
    }

    > :nth-child(1) {
        background-color: red;
    }

    > :nth-child(2) {
        background-color: green;
    }
`