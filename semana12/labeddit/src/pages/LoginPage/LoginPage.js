import React from 'react'
import { ScreenContainer, SignUpButtonContainer, LoginFormContainer } from './styles'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'

export default function LoginPage() {

    const history = useHistory()

    return (
        <ScreenContainer>
            <h1>Login</h1>
            <LoginFormContainer>
                <LoginForm />
            </LoginFormContainer>
            <SignUpButtonContainer>
                <Button
                    fullWidth
                    variant='text'
                    color='primary'
                    onClick={() => goToSignUp(history)}
                >
                    Não possui uma conta? Cadastre-se!
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}
