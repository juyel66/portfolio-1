import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './Root'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<div className='bg-[#001529]'>
     <RouterProvider router={Router}></RouterProvider>
</div>
  </StrictMode>,
)
