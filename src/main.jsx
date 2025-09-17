import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/store/appStore.js'

const root = createRoot( document.getElementById("root"))

root.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
