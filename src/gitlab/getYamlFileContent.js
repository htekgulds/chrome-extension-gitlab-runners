import { load } from 'js-yaml'
import { getGitlabRawFile } from './getGitlabRawFile'

export default async function getYamlFileContent ({ projectId, path, branch }) {
  const yaml = await getGitlabRawFile({ projectId, path, ref: branch })

  if (!yaml) {
    console.debug(projectId, "id'li projenin", branch, "branch'ında", path, 'dosyası bulunamadı')
    return null
  }

  try {
    const json = load(yaml)

    return json
  } catch (error) {
    console.error(projectId, "id'li projenin", branch, "branch'ında", path, 'dosyasının içeriği hatalı olabilir')
    console.error(error)
    return null
  }
}
