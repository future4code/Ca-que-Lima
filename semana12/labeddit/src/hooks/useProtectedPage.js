import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"

 export const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('tokenLabEddit')

        if (token === null) {
            history.push('/login')
        }
    }, [history])
}