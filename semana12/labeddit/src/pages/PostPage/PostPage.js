import React, { useContext } from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import GlobalContext from '../../global/GlobalContext'
import PostCard from '../../components/PostCard/PostCard'

export default function PostPage() {

    useProtectedPage()

    const { states } = useContext(GlobalContext)

    const params = useParams()

    const headers = {
        headers: {
            Authorization: localStorage.getItem('tokenLabEddit')
        }
    }

    const [comments] = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, headers)

    const commentList = comments?.map(comment => {

    })

    return (
        <div>
            <PostCard
                username={states.postBeingCommented.username}
                body={states.postBeingCommented.body}
                voteSum={states.postBeingCommented.voteSum}
                commentCount={states.postBeingCommented.commentCount}
            />

        </div>
    )
}
