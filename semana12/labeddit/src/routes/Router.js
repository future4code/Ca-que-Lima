import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>

                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/feed'}>
                    <FeedPage />
                </Route>

                <Route exact path={'/details/:id'}>
                    <PostPage />
                </Route>

                <Route exact path={'/sign-up'}>
                    <SignUpPage />
                </Route>

                <Route exact path={''}>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}