import React, { useState } from 'react'
import { ContainerCounter } from './styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { upVote, downVote } from '../../services/posts'
import { IconButton } from '@material-ui/core'

export default function UpVotesCounter({ upVotes, setVotes, id, userVote }) {

    const [newUserVote, setNewUserVote] = useState(userVote ? userVote : 0)

    const handleUpVote = (e) => {
        console.log(userVote)
        if (userVote === null || userVote === -1) {
            upVote(id)
            const newVoteCount = Number(upVotes) + 1
            setVotes(newVoteCount)
            setNewUserVote(1)
        }

    }

    const handleDownVote = () => {
        console.log(userVote)
        if (userVote === null || userVote === 1) {
            downVote(id)
            const newVoteCount = Number(upVotes) - 1
            setVotes(newVoteCount)
            setNewUserVote(-1)
        }
    }



    return (
        <ContainerCounter>
            <IconButton onClick={handleUpVote}>
                <ArrowUpwardIcon color={userVote === 1 ? 'disabled' : "inherit"} />
            </IconButton>
            <span>{upVotes}</span>
            <IconButton onClick={handleDownVote}>
                <ArrowDownwardIcon color={userVote === -1 ? 'disabled' : "inherit"} />
            </IconButton>
        </ContainerCounter>
    )
}