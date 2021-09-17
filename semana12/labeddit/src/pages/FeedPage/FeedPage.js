import React from 'react'
import PostCard from '../../components/PostCard/PostCard'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { ScreenContainer } from './styles'
import { useState, useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

export default function FeedPage() {

    useProtectedPage()

    const headers = {
        headers: {
            Authorization: localStorage.getItem('tokenLabEddit')
        }
    }

    const [posts, loadingPosts, errorPosts] = useRequestData(`${BASE_URL}/posts`, headers)

    const postList = posts?.map(post => {
        return (
            <PostCard
                key={post.id}
                id={post.id}
                username={post.username}
                body={post.body}
                voteSum={post.voteSum}
                commentCount={post.commentCount}
                userVote={post.userVote}
            />
        )

    })

    return (
        <ScreenContainer>
            {loadingPosts && <p>Carregando...</p>}
            {!loadingPosts && errorPosts && <p>Ocorreu um erro</p>}
            {!loadingPosts && posts && posts.length > 0 && postList}
            {!loadingPosts && posts && posts.length === 0 && (
                <p>Nenhum post encontrado!</p>
            )}
        </ScreenContainer>
    )
}
