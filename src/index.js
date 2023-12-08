import getGitlabProject from './gitlab/getGitlabProject'
import getYamlFileContent from './gitlab/getYamlFileContent'
import getRunnersByTags from './gitlab/getRunnersByTags'
import btnHtml from './view/button.js'
import getIpCopyInput from './view/ip-copy.js'
import getRunnerTagsFromMatrix from './gitlab/getRunnerTagsFromMatrix.js'

const tree = document.querySelector('.tree-ref-holder')
tree.style = 'display: flex; grid-gap: 10px;'
const div = document.createElement('div')
div.innerHTML = btnHtml
tree.appendChild(div)
const content = document.getElementById('runners-droprown-content')
let clicked = false

const btn = document.getElementById('runners-button')
btn.querySelector('button.btn').addEventListener('click', async () => {
  if (clicked) return false

  clicked = true
  const dirPart = window.location.pathname.indexOf('/-/')
  const projectPath = (
    dirPart !== -1 ? window.location.pathname.substring(0, dirPart) : window.location.pathname
  ).substring(1)
  const project = await getGitlabProject(projectPath)
  const yaml = await getYamlFileContent({ projectId: project.id, path: '.gitlab-ci.yml', branch: 'HEAD' })
  const stages = Object.keys(yaml).filter(field => !['variables', 'include', 'stages'].includes(field))
  const tagsInStages = [
    ...new Set(
      stages
        .flatMap(stage => {
          const tag = yaml[stage].tags?.[0]
          if (!tag) return null
          if (tag.includes('${')) {
            const key = tag.match(/^\$\{(.*)\}$/)
            const tags = getRunnerTagsFromMatrix(yaml[stage], key[1])
            return tags
          }
          return tag
        })
        .filter(i => !!i)
    )
  ]
  const runners = await Promise.all(tagsInStages.map(tag => getRunnersByTags([tag])))
  runners
    .flatMap(i => i)
    .map(runner => getIpCopyInput(runner.ip, runner.tags[0]))
    .forEach(i => {
      const div = document.createElement('div')
      div.className = 'd-flex py-2 justify-content-between align-items-center'
      div.innerHTML = i
      content.appendChild(div)
    })
})
