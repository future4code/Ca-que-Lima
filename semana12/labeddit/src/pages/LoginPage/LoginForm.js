import React from 'react'
import { InputsContainer } from './styles'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'

export default function LoginForm() {

    const { form, onChange } = useForm({ email: "", password: "" })

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmit}>
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
                    Fazer Login
                </Button>
            </form>
        </InputsContainer>

    )
}
