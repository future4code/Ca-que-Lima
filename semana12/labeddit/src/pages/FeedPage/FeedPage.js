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

    console.log(posts && posts[0])

    const postList = posts?.map(post => {
        return (
            <PostCard
                key={post.id}
                id={post.id}
                username={post.username}
                body={post.body}
                voteSum={post.voteSum}
                commentCount={post.commentCount}
            />
        )

    })

    return (
        <ScreenContainer>
            {/* <PostCard /> */}
            {postList}
        </ScreenContainer>
    )
}
