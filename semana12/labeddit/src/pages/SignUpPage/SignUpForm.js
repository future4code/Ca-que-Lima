import React from 'react'
import { InputsContainer } from './styles'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'
import GlobalContext from '../../global/GlobalContext'
import { useContext } from 'react'

export default function LoginForm() {

    const { form, onChange } = useForm({ username: "", email: "", password: "" })

    const { setters } = useContext(GlobalContext)

    const history = useHistory()

    const onSubmit = (event) => {
        event.preventDefault()
        signUp(form, history, setters.setRightButtonText)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmit}>
                <TextField
                    label='Nome de Usuário'
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    variant='outlined'
                    fullWidth
                    margin={'normal'}
                    required
                    type='text'
                />
                <TextField
                    label='Email'
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    variant='outlined'
                    fullWidth
                    margin={'normal'}
                    required
                    type='email'
                />
                <TextField
                    label='Senha'
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    variant='outlined'
                    fullWidth
                    margin={'normal'}
                    required
                    type='password'
                />
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                >
                    Fazer Cadastro
                </Button>
            </form>
        </InputsContainer>

    )
}
