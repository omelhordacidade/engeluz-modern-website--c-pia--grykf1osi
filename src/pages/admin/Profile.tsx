import { useState, useRef } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { toast } from 'sonner'
import pb from '@/lib/pocketbase/client'
import { getErrorMessage } from '@/lib/pocketbase/errors'
import { Upload, Save, User as UserIcon } from 'lucide-react'

export default function AdminProfile() {
  const { user } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatarFile(file)
      const url = URL.createObjectURL(file)
      setAvatarPreview(url)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', name)
      if (avatarFile) {
        formData.append('avatar', avatarFile)
      }

      await pb.collection('users').update(user.id, formData)
      toast.success('Perfil atualizado com sucesso')
    } catch (err) {
      toast.error('Erro ao atualizar perfil', { description: getErrorMessage(err) })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Meu Perfil</h1>
        <p className="text-gray-500 mt-1">Gerencie suas informações pessoais e foto de perfil.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-100">
              <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                <AvatarImage
                  src={
                    avatarPreview ||
                    (user?.avatar
                      ? `${pb.baseUrl}/api/files/_pb_users_auth_/${user.id}/${user.avatar}`
                      : '')
                  }
                  alt={user?.name || 'Avatar'}
                />
                <AvatarFallback className="bg-gray-100 text-gray-400 text-2xl">
                  {user?.name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Alterar Foto
                </Button>
                <p className="text-xs text-gray-500">
                  Recomendado: imagem quadrada (JPG, PNG). Máx: 5MB.
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  className="hidden"
                  accept="image/png, image/jpeg, image/webp"
                />
              </div>
            </div>

            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={user?.email || ''}
                  disabled
                  className="bg-gray-50 text-gray-500"
                />
                <p className="text-xs text-gray-400">O email não pode ser alterado.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Nível de Acesso</Label>
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
                  <UserIcon className="w-4 h-4" />
                  {user?.role === 'admin' ? 'Administrador' : 'Assistente'}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <Button
                type="submit"
                className="bg-[#0a488a] hover:bg-[#083a70]"
                disabled={isLoading}
              >
                {isLoading ? (
                  'Salvando...'
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
