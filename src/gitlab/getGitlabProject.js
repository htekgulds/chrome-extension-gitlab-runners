import client from './client'

export default async function getGitlabProject (id) {
  const res = await client.get(`/projects/${encodeURIComponent(id)}`)

  return await res.json()
}
