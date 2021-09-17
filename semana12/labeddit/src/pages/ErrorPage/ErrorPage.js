import React from "react"
import Typography from '@material-ui/core/Typography'
import { ErrorPageContainer } from './styles'

export default function ErrorPage() {
    return (
        <ErrorPageContainer>
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
    )
}