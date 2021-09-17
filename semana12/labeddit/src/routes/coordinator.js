export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToHome = (history) => {
    history.push('/')
}

export const goToDetail = (history, id) => {
    history.push(`/detalhes/${id}`)
}