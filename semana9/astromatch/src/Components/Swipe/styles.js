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
        margin-left: 80px;
    }

    > p {
        margin-left: 140px;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 500px;

    > img {
        max-width: 100%;
        max-height: 300px;
    }

    > div {
        align-self: flex-start;
        margin-left: 20px;
    }

    h4 {
        display: inline;
    }
`


export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`