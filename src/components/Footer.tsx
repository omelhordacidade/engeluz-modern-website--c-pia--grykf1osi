import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-[6px] border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Logo variant="white-bg" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Liderança e inovação em engenharia elétrica e requalificação urbana para todo o
              território nacional.
            </p>
            <Badge
              variant="secondary"
              className="bg-white/10 hover:bg-white/20 text-white border-none mt-2"
            >
              Desde 1980
            </Badge>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-1 border border-white/20 rounded-xl p-6 h-full">
            <h4 className="font-heading font-bold text-lg">Acesso Rápido</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/integridade"
                  className="text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  Programa de Integridade
                </Link>
              </li>
              <li>
                <Link
                  to="/carreiras"
                  className="text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Units */}
          <div className="space-y-4 lg:col-span-3 border border-white/20 rounded-xl p-6 h-full">
            <h4 className="font-heading font-bold text-lg">Nossas Unidades</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-2 text-sm text-gray-300">
                <p className="font-bold text-white flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary shrink-0" /> ENGENHARIA E FÁBRICA
                </p>
                <p className="leading-relaxed">
                  Rodovia Parigot de Souza, KM 254,
                  <br />
                  Bloco A - Distrito Industrial
                  <br />
                  Wenceslau Braz - PR | CEP: 84950-000
                </p>
                <p className="text-secondary font-medium flex items-center gap-2 mt-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+554335131200" className="hover:underline">
                    (43) 3513-1200
                  </a>
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <p className="font-bold text-white flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary shrink-0" /> ESCRITÓRIO COMERCIAL
                </p>
                <p className="leading-relaxed">
                  Rua Eduardo Sprada, 344
                  <br />
                  Campo Comprido
                  <br />
                  Curitiba - PR | CEP 81220-000
                </p>
                <p className="text-secondary font-medium flex items-center gap-2 mt-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+554133521428" className="hover:underline">
                    (41) 3352-1428
                  </a>
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <p className="font-bold text-white flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary shrink-0" /> ESCRITÓRIO COMERCIAL SP
                </p>
                <p className="leading-relaxed">
                  Avenida Antartica, 675, CJ 2101
                  <br />
                  Barra Funda
                  <br />
                  São Paulo - SP | CEP: 05003-020
                </p>
                <p className="text-secondary font-medium flex items-center gap-2 mt-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+551138642759" className="hover:underline">
                    (11) 3864-2759
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Engeluz. Todos os direitos reservados.</p>
          <div className="flex gap-6 font-medium">
            <Link to="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
