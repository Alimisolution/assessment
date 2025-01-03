import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import DetailsPage from './pages/DetailsPage/DetailsPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' index={true} element={<HomePage/>}/>
      <Route path='/details/:id' element={<DetailsPage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
