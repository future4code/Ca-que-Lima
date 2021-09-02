import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  title: {
    fontSize: 14,
  }
})

export default function PostCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Comentários</Button>
        <Button size="small">Ver Comentários</Button>
      </CardActions>
    </Card>
  )
}
