import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Counter from '../UpVotesCounter/UpvotesCounter'
import { goToDetail } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

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

export default function PostCard({ username, body, voteSum, commentCount, id }) {
  const classes = useStyles()

  const history = useHistory()

  const [votes, setVotes] = useState(voteSum)

  console.log(votes)

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
        <Button size="small" onClick={() => goToDetail(history, id)}>Ver Comentários</Button>
        <Counter upVotes={votes ? votes : 0} setVotes={setVotes} id={id} />
      </CardActions>
    </Card>
  )
}
