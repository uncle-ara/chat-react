import React, { useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import AuthRoute from './components/AuthRoute/AuthRoute'
import UnauthedRoute from './components/UnauthedRoute/UnauthedRoute'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './components/Loader/Loader'
import UserMenu from './components/UserMenu/UserMenu'
import Chat from './components/Chat/Chat'
import Login from './components/Login/Login'

import styles from './App.module.less'
import { Context } from '.'

const App = () => {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <div className={styles.base}>
        <header className={styles.header}>
          <UserMenu />
        </header>
        <Switch>
          <AuthRoute component={Chat} path="/chat" />
          <UnauthedRoute component={Login} path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
