import React from 'react'
import { ContainerCounter } from './styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { upVote, downVote } from '../../services/posts'

export default function UpVotesCounter({ upVotes, setVotes, id }) {

    const handleUpVote = () => {
        // upVote(id)
        // const newVoteCount = Number(upVotes) + 1
        // setVotes(newVoteCount)
    }

    const handleDownVote = () => {
        // downVote(id)
        // const newVoteCount = Number(upVotes) - 1
        // setVotes(newVoteCount)
    }


    return (
        <ContainerCounter>
            <ArrowUpwardIcon onClick={handleUpVote} />
            <span>{upVotes}</span>
            <ArrowDownwardIcon onClick={handleDownVote} />
        </ContainerCounter>
    )
}