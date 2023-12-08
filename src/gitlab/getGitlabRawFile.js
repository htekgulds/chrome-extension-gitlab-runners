import client from './client'

export async function getGitlabRawFile ({ projectId, path, ref = 'master' }) {
  try {
    const res = await client.get(`/projects/${projectId}/repository/files/${encodeURIComponent(path)}/raw?ref=${ref}`)

    return await res.text()
  } catch (error) {
    console.error(error)
    console.debug('Dosya bulunamadı')
    return null
  }
}
