import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes/AllRoutes';
import AuthProvider from './AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';




import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)