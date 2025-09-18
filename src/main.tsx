import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './provider.tsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/Jodn-doe-portfolio">
     {/* NextJs Themes  */}
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>,
)
