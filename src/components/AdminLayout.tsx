import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { LogOut, Users, FileText, Menu, X, User } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function AdminLayout() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSignOut = () => {
    signOut()
    navigate('/admin/login')
  }

  const navItems = [
    { name: 'Candidaturas', path: '/admin/dashboard', icon: FileText, reqAdmin: false },
    { name: 'Usuários', path: '/admin/users', icon: Users, reqAdmin: true },
    { name: 'Meu Perfil', path: '/admin/profile', icon: User, reqAdmin: false },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0a488a] text-white">
      <div className="p-6 font-bold text-2xl border-b border-white/10">Engeluz Admin</div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          if (item.reqAdmin && user?.role !== 'admin') return null
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                isActive ? 'bg-white/20 font-medium' : 'hover:bg-white/10',
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="mb-4 px-4">
          <p className="text-sm font-medium truncate">{user?.name || user?.email}</p>
          <p className="text-xs text-blue-200 capitalize">
            {user?.role === 'admin' ? 'Administrador' : 'Assistente'}
          </p>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
          onClick={handleSignOut}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sair
        </Button>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside className="hidden md:block w-64 flex-shrink-0">
        <SidebarContent />
      </aside>

      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0a488a] text-white z-50 flex items-center justify-between px-4">
        <span className="font-bold text-lg">Engeluz Admin</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <aside className="w-64 h-full" onClick={(e) => e.stopPropagation()}>
            <SidebarContent />
          </aside>
        </div>
      )}

      <main className="flex-1 overflow-y-auto pt-16 md:pt-0">
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
