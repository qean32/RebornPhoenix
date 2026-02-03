import ReactDOM from 'react-dom/client'
import './style/core.scss'
import './style/app.css'
import { Router } from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import { QueryClientProvider, QueryClient } from 'react-query'
import { MainLoader } from './component/master'
import { ProtectedRouteTechWork } from './pages/protected-route'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // <HookFormProvider>
  <ProtectedRouteTechWork>

    <QueryClientProvider client={new QueryClient({})}>
      <Provider store={store} >
        <MainLoader />
        <Router />
      </Provider>
    </QueryClientProvider >
  </ProtectedRouteTechWork>
  // </HookFormProvider>
  // </React.StrictMode>,
)


/**
 * push this in React -> declare namespace React
 * interface HTMLAttributes<T> extends DOMAttributes<T> {
 *   data?: string;
 *   value?: string;
 * }
*/
