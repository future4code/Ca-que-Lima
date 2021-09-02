import React from 'react'
import PostCard from '../../components/Card/Card'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { ScreenContainer } from './styles'

export default function FeedPage() {

    useProtectedPage()
    
    return (
        <ScreenContainer>
            <PostCard />
        </ScreenContainer>
    )
}
