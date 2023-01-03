import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { LogIn } from './userAccess/LogIn'
import { DisplayInfo } from './userAccess/DisplayInfo'
import { PersonalInfo } from './userAccess/PersonalInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />
  },
  {
    path: '/personal/info',
    element: <PersonalInfo />
  },
  {
  path: '/display/info',
  element: <DisplayInfo />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
