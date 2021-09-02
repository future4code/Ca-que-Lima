import axios from "axios"
import React, { useState, useEffect } from "react"
import GlobalContext from "./GlobalContext"
import { baseURL } from "../constants/urls"

const GlobalState = (props) => {

    const token = localStorage.getItem('tokenLabEddit')

    const [rightButtonText, setRightButtonText] = useState(token ? 'Logout' : 'Login')

    const states = { rightButtonText }
    const setters = { setRightButtonText }
    const requests = {}

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState