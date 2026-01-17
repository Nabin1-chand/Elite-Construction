import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ProjectProvider } from './provider/ProjectContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <ChakraProvider>
      
      <ProjectProvider>
      <App/>     
      </ProjectProvider>
    </ChakraProvider>

      </BrowserRouter>
  </StrictMode>,
)
