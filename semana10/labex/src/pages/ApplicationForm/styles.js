import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 30px;

    > :nth-child(5) {
        width: 500px;
        height: 45px;
        margin: 10px;
        padding: 0 15px;
        border-radius: 5px;
    }
`

export const Input = styled.input`
    width: 500px;
    height: 45px;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid black;
`

export const Select = styled.select`
    width: 500px;
    height: 45px;
    margin: 10px;
    padding: 0 15px;
    border-radius: 5px;
`

export const ContainerButtons = styled.div`
    display: flex;
    align-self: center;
    margin: 30px;
    width: 100px;
    justify-content: center;
`

export const TextArea = styled.textarea`
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
`