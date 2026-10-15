import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'
import { useAuth } from '@/hooks/use-auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import pb from '@/lib/pocketbase/client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Quem Somos', href: '/quem-somos' },
  { name: 'Programa de Integridade', href: '/integridade' },
  { name: 'Portfólio', href: '/portfolio' },
  {
    name: 'Contato',
    href: '#',
    subMenu: [
      { name: 'Fale Conosco', href: '/contato' },
      { name: 'Trabalhe Conosco', href: '/carreiras' },
      { name: 'Manutenção', href: '/manutencao' },
      { name: 'Solicitação WhatsApp', href: '/solicitacao-whatsapp' },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, isAuthenticated, signOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isDarkHeader = isScrolled || isHome

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-primary/95 backdrop-blur-sm shadow-md py-3'
          : isHome
            ? 'bg-transparent py-5'
            : 'bg-white shadow-sm py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group transition-transform hover:scale-105">
          <Logo variant={isDarkHeader ? 'white-bg' : 'default'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) =>
            item.subMenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger
                  className={cn(
                    'text-sm font-medium uppercase tracking-wide transition-colors flex items-center gap-1 outline-none',
                    isDarkHeader
                      ? 'text-white/90 hover:text-secondary'
                      : 'text-primary hover:text-secondary',
                  )}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 bg-white border-border shadow-md"
                  align="start"
                >
                  {item.subMenu.map((sub) => (
                    <DropdownMenuItem
                      key={sub.name}
                      asChild
                      className="cursor-pointer hover:bg-muted"
                    >
                      <Link to={sub.href} className="w-full text-primary font-medium">
                        {sub.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium uppercase tracking-wide transition-colors',
                  isDarkHeader
                    ? 'text-white/90 hover:text-secondary'
                    : 'text-primary hover:text-secondary',
                )}
              >
                {item.name}
              </Link>
            ),
          )}
          {!isAuthenticated ? (
            <Button
              asChild
              variant="secondary"
              className="font-bold bg-secondary hover:bg-secondary/90 text-primary-foreground"
            >
              <Link to="/admin/login">Login / Colaborador</Link>
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full border-2 border-secondary/50 p-0 overflow-hidden"
                >
                  <Avatar className="h-full w-full">
                    <AvatarImage
                      src={
                        user?.avatar
                          ? `${pb.baseUrl}/api/files/_pb_users_auth_/${user.id}/${user.avatar}`
                          : ''
                      }
                      alt={user?.name}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user?.name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-white border-border shadow-md"
                align="end"
                forceMount
              >
                <div className="flex items-center justify-start gap-2 p-2 mb-1 border-b border-gray-100">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user?.name || 'Usuário'}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <Link to="/admin/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-muted cursor-pointer">
                  <Link to="/admin/profile" className="w-full">
                    Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 mt-1 border-t border-gray-100"
                  onClick={() => {
                    signOut()
                    navigate('/')
                  }}
                >
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'hover:bg-primary/10',
                  isDarkHeader ? 'text-white hover:bg-white/20' : 'text-primary',
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-primary">
              <div className="flex flex-col gap-6 mt-12">
                {navigation.map((item) =>
                  item.subMenu ? (
                    <div key={item.name} className="flex flex-col gap-3">
                      <span className="text-lg font-medium text-white/70 uppercase text-sm tracking-widest">
                        {item.name}
                      </span>
                      <div className="flex flex-col gap-3 pl-4 border-l border-white/20">
                        {item.subMenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="text-lg font-medium text-white hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium text-white hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ),
                )}
                {!isAuthenticated ? (
                  <Button
                    asChild
                    variant="secondary"
                    className="mt-4 w-full bg-secondary hover:bg-secondary/90 text-primary-foreground"
                  >
                    <Link to="/admin/login" onClick={() => setIsOpen(false)}>
                      Login / Colaborador
                    </Link>
                  </Button>
                ) : (
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-10 w-10 border border-white/20">
                        <AvatarImage
                          src={
                            user?.avatar
                              ? `${pb.baseUrl}/api/files/_pb_users_auth_/${user.id}/${user.avatar}`
                              : ''
                          }
                        />
                        <AvatarFallback className="bg-white/10 text-white">
                          {user?.name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col text-white">
                        <span className="font-medium text-sm">{user?.name || 'Usuário'}</span>
                        <span className="text-xs text-white/70">{user?.email}</span>
                      </div>
                    </div>
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-secondary py-2"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/profile"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-secondary py-2"
                    >
                      Meu Perfil
                    </Link>
                    <button
                      onClick={() => {
                        signOut()
                        setIsOpen(false)
                        navigate('/')
                      }}
                      className="text-left text-red-400 hover:text-red-300 py-2"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
