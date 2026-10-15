import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/hooks/use-auth'
import Layout from './components/Layout'

import Index from './pages/Index'
import QuemSomos from './pages/QuemSomos'
import Portfolio from './pages/Portfolio'
import ProgramaIntegridade from './pages/ProgramaIntegridade'
import TrabalheConosco from './pages/TrabalheConosco'
import Contato from './pages/Contato'
import Manutencao from './pages/Manutencao'
import SolicitacaoWhatsapp from './pages/SolicitacaoWhatsapp'
import NotFound from './pages/NotFound'

import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import AdminUsers from './pages/admin/Users'
import AdminProfile from './pages/admin/Profile'
import { AdminLayout } from './components/AdminLayout'
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/nossas-solucoes" element={<Navigate to="/portfolio" replace />} />
            <Route path="/solucoes-subterraneas" element={<Navigate to="/portfolio" replace />} />
            <Route path="/integridade" element={<ProgramaIntegridade />} />
            <Route path="/carreiras" element={<TrabalheConosco />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/manutencao" element={<Manutencao />} />
            <Route path="/solicitacao-whatsapp" element={<SolicitacaoWhatsapp />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/profile" element={<AdminProfile />} />
              <Route element={<ProtectedRoute requireAdmin />}>
                <Route path="/admin/users" element={<AdminUsers />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
