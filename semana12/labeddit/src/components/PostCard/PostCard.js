import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import UpVotesCounter from '../UpVotesCounter/UpvotesCounter'
import { goToDetail } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import CommentCounter from '../CommentCounter/CommentCounter'
import GlobalContext from '../../global/GlobalContext'


const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  body: {
    fontSize: 20,
  }
})

export default function PostCard({ username, body, voteSum, commentCount, id, userVote }) {

  const { setters } = useContext(GlobalContext)

  const classes = useStyles()

  const history = useHistory()

  const [votes, setVotes] = useState(voteSum)

  const handleClick = () => {
    goToDetail(history, id)
    setters.setPostBeingCommented({
      username: username,
      body: body,
      voteSum: voteSum,
      commentCount: commentCount
    })
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {username}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Ver Comentários</Button>
        <UpVotesCounter upVotes={votes ? votes : 0} setVotes={setVotes} id={id} userVote={userVote} />
        <CommentCounter commentCount={commentCount} />
      </CardActions>
    </Card>
  )
}