import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import DocumentationPage from './pages/DocumentationPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/docs" element={<DocumentationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
