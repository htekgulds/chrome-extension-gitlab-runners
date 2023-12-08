# CGitlab Runners Chrome Extension

This is a Chrome extension that you can use with gitlab.com or on-premise Gitlab instances. It shows a button on the project page and provides a list of runners that project uses when you click the button.

# Installation

1. Clone the repository
2. Run `npm run package`. This will create the extension package as `extension.tar.gz`
3. Decompress the package in a suitable folder.
4. Install on Chrome extensions page using "Load unpacked" button.

Now when you visit a Gitlab project page you will see a new button appear. Click the button and you will see a list of runners that the project uses in its `.gitlab-ci.yml` file.

The extension works by extracting the `tags` fields used in that file and searching those tags with the Gitlab Runner API.

Enjoy!

# Credits

Thanks [Codestar](https://github.com/Codestar) for coming up with the idea and providing a prototype that i built upon