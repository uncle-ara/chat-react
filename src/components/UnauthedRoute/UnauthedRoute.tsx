import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { Context } from '../../context'

export interface Props extends RouteProps {
  component: React.FC
}

/**
 * Wrapper of Route from react-router-dom, that render component only
 * without authorization. Authorazed user will be redirected to '/chat'.
 * @param props Props
 * @returns JSX.Element
 */
const UnauthedRoute = ({ component: Component, ...rest }: Props) => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return <Route {...rest} render={() => (!user ? <Component /> : <Redirect to="/chat" />)} />
}
export default UnauthedRoute
