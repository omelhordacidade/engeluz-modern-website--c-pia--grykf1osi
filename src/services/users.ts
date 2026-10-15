import pb from '@/lib/pocketbase/client'

export const getUsers = () => {
  return pb.collection('users').getFullList({ sort: '-created' })
}

export const createUser = (data: any) => {
  return pb.collection('users').create({
    ...data,
    passwordConfirm: data.password,
  })
}

export const deleteUser = (id: string) => {
  return pb.collection('users').delete(id)
}

export const toggleUserApproval = (id: string, is_approved: boolean) => {
  return pb.collection('users').update(id, { is_approved })
}
