import Chat from './components/Chat/Chat'
import Login from './components/Login/Login'

export const AuthRoutes = [
  {
    path: '/login',
    Component: Login,
    exact: true,
  },
  {
    path: '/chat',
    Component: Chat,
    exact: true,
  },
]
