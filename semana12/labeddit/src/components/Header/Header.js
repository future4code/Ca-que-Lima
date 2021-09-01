import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styles'
import { goToHome, goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'



export default function Header() {
  const history = useHistory()

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color="inherit" onClick={() => goToHome(history)}>LabEddit</Button>
        <Button color="inherit" onClick={() => goToLogin(history)}>Login</Button>
      </StyledToolbar>
    </AppBar>

  )
}