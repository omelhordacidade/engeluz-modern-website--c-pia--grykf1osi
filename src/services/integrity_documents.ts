import pb from '@/lib/pocketbase/client'
import type { RecordModel } from 'pocketbase'

export const getIntegrityDocuments = () => {
  return pb.collection('integrity_documents').getFullList({
    sort: 'created',
  })
}

export const getIntegrityDocumentUrl = (record: RecordModel, filename: string) => {
  const url = new URL(pb.files.getURL(record, filename))
  url.searchParams.set('download', '1')
  return url.toString()
}
