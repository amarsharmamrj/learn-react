import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Product from './components/Product.jsx'
import Layout from './components/Layout.jsx'
import InfiniteScroll from './components/InfiniteScroll.jsx'
const query = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={< App />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/infinite' element={<InfiniteScroll />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
)
