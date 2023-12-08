import client from './client'

export default async function getRunnersByTags (tags = []) {
  const params = new URLSearchParams({
    tag_list: tags.join(',') // Gitlab API'si tag'leri AND'leyerek arama yapıyor
  })
  const res = await client.get('/runners/all?' + params)

  const json = await res.json()

  return json.map(runner => ({
    id: runner.id,
    ip: runner.ip_address,
    description: runner.description,
    tags
  }))
}
