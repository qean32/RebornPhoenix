import ReactDOM from 'react-dom/client'
import './style/core.scss'
import './style/app.css'
import { Router } from './router'
import { MainLoader } from './component/shared'
import { Root } from './component/master/root'
import { socketConfig } from './lib/socket-config'

socketConfig()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Root>
    <MainLoader />
    <Router />
  </Root>
)


/**
 * push this in React -> declare namespace React
 * interface HTMLAttributes<T> extends DOMAttributes<T> {
 *   data?: string;
 *   value?: string;
 * }
*/
