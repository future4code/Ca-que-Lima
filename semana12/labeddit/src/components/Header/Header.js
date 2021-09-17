import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styles'
import { goToHome, goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import GlobalContext from '../../global/GlobalContext'
import { useContext } from 'react'

export default function Header() {

  const history = useHistory()

  const token = localStorage.getItem('tokenLabEddit')

  const { states, setters } = useContext(GlobalContext)

  const logout = () => {
    localStorage.removeItem('tokenLabEddit')
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setters.setRightButtonText('Login')
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color="inherit" onClick={() => goToHome(history)}>LabEddit</Button>
        <Button color="inherit" onClick={rightButtonAction}>{states.rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>

  )
}