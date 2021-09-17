import React from 'react'
import { ScreenContainer, SignUpFormContainer } from './styles'
import SignUpForm from './SignUpForm'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

export default function LoginPage() {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <h1>Cadastro</h1>
            <SignUpFormContainer>
                <SignUpForm />
            </SignUpFormContainer>
        </ScreenContainer>
    )
}