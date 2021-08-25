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
    width: 500px;
    justify-content: space-around;
`

export const CardTrip = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    width: 550px;
    height: 70px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 3px lightgrey;
    transition: 0.1s;

    &:hover {
        background-color: lightblue;
        
    }

    > div {
        padding: 10px 250px 10px 0;
        cursor: pointer;
    }

    > :nth-child(2) {
        /* margin-right: 15px; */
        position: relative;
        right: 10px;
        &:hover {
            color: red;
            cursor: pointer;
            transform: scale(1.2)
        }
    }
`