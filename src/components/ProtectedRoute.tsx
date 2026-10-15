import { Navigate, Outlet, Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'

export function ProtectedRoute({ requireAdmin }: { requireAdmin?: boolean }) {
  const { isAuthenticated, loading, user, signOut } = useAuth()

  if (loading) return null

  if (!isAuthenticated) return <Navigate to="/admin/login" replace />

  if (user && !user.is_approved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#0a488a] mb-4">Aguardando Aprovação</h2>
          <p className="text-gray-600 mb-6">
            Sua conta foi criada e está aguardando a aprovação de um administrador para acessar o
            painel.
          </p>
          <div className="flex flex-col gap-3">
            <Button asChild className="w-full bg-[#0a488a] hover:bg-[#083a70]">
              <Link to="/">Voltar ao Início</Link>
            </Button>
            <Button variant="outline" className="w-full" onClick={() => signOut()}>
              Sair da Conta
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (requireAdmin && user?.role !== 'admin') return <Navigate to="/admin/dashboard" replace />

  return <Outlet />
}
