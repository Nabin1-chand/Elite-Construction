import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ProjectContext } from './provider/ProjectContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <ProjectContext>
      <App/>
            
      </ProjectContext>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
