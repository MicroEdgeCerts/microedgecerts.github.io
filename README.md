# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

### Installation

```
$ npm install
```

### Local Development

日本語番
```
$ npm run start -- --locale ja
```
English
```
$ npm run start -- --locale en
```


This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.



### Deployment ( TODO )

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


