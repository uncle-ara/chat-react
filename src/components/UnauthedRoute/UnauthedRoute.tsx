import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { Context } from '../..'

export interface Props extends RouteProps {
  component: React.FC
}

const UnauthedRoute = ({ component: Component, ...rest }: Props) => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return <Route {...rest} render={() => (!user ? <Component /> : <Redirect to="/chat" />)} />
}
export default UnauthedRoute
