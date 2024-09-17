import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/routes.jsx'
// import { ReactDOM } from 'react'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
