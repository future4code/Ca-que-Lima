import React from 'react'
import { ContainerCounter } from './styles'

export default function CommentCounter({ commentCount }) {
    return (
        <ContainerCounter>
            <span>Comentários:</span><span>{commentCount ? commentCount : 0}</span>
        </ContainerCounter>
    )
}
