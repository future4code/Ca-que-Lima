import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    margin: 30px auto;
`

export const ContainerButtons = styled.div`
    display: flex;
    margin: 30px;
    width: 250px;
    justify-content: space-around;
`

export const CardTrip = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 550px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 3px lightgrey;

    p {
        display: inline;
        margin-right: 10px;
        font-weight: 600;
    }

    > div {
        margin: 5px 0;
    }
`

export const Button = styled.button`
    &:hover {
        background-color: lightblue;
        /* color: white; */
    }
`