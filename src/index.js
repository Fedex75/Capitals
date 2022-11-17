import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import './index.css'
import './themes.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    registration.waiting.postMessage({type: 'SKIP_WAITING'})
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      alert('Hay una nueva versión disponible')
      window.location.reload()
    })
  },
  onSuccess: () => {}
})