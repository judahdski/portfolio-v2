import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import ClientPage from './pages/ClientPage'
import MaintenancePage from './pages/MaintenancePage'
import NotFoundPage from './pages/NotFoundPage'
import RecruiterPage from './pages/RecruiterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/recruiter" replace />} />
      <Route element={<AppShell />}>
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/client" element={<ClientPage />} />
      </Route>
      <Route path="/maintenance" element={<MaintenancePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
