import React from 'react'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

export default function SingUpPage() {
    useUnprotectedPage()

    return (
        <div>
            <h1>Cadastro</h1>
        </div>
    )
}