const fs = require('fs-extra')
const targz = require('targz')
const pkgJson = require('./package.json')

// Make directory
fs.removeSync('package')
fs.mkdirSync('package')
fs.copySync('extension', 'package/chrome-extension-get-runners')

// Prepare manifest.json
const manifest = fs.readFileSync('extension/manifest.json', { encoding: 'utf-8' })
const manifestWithVersion = manifest.replace('dev', pkgJson.version)
fs.writeFileSync('package/chrome-extension-get-runners/manifest.json', manifestWithVersion)

// Prepare package
targz.compress(
  {
    src: 'package',
    dest: 'extension.tar.gz'
  },
  err => {
    if (err) {
      console.error(err)
    }
    fs.removeSync('package')
  }
)
