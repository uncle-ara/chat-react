import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Context, initialContext } from './context'

ReactDOM.render(
  <Context.Provider value={initialContext}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
)
