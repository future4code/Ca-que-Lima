import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToHome } from "../routes/coordinator"

 export const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('tokenLabEddit')

        if (token) {
            goToHome(history)
        }
    }, [history])
}