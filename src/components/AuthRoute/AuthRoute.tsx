import React, { useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../context'

export interface Props extends RouteProps {
  component: React.FC
}

/**
 * Wrapper of Route from react-router-dom with auth guard
 * @param props Props
 * @returns JSX.Element
 */
const AuthRoute = ({ component: Component, ...rest }: Props) => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return <Route {...rest} render={() => (user ? <Component /> : <Redirect to="/" />)} />
}

export default AuthRoute
