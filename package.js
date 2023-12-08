const fs = require('fs-extra')
const targz = require('targz')
const pkgJson = require('./package.json')

function copyFiles (env) {
  // Make directories
  fs.copySync('extensions/common', `packages/${env}/${env}-extension-gitlab-runners`)
  fs.copySync(`extensions/${env}`, `packages/${env}/${env}-extension-gitlab-runners`)

  // Prepare manifest.json
  const manifest = fs.readFileSync(`extensions/${env}/manifest.json`, { encoding: 'utf-8' })
  const manifestWithVersion = manifest.replace('dev', pkgJson.version)
  fs.writeFileSync(`packages/${env}/${env}-extension-gitlab-runners/manifest.json`, manifestWithVersion)
}

function zipFiles (env) {
  // Prepare zip package
  targz.compress(
    {
      src: `packages/${env}`,
      dest: `extension-${env}.tar.gz`
    },
    err => {
      if (err) {
        console.error(err)
      }
      fs.removeSync(`packages/${env}`)
    }
  )
}

fs.emptyDirSync('packages')
;['chrome', 'firefox'].forEach(browser => {
  copyFiles(browser)
  zipFiles(browser)
})
