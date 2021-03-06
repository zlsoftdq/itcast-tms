# Itcast Teaching Management System

[![Build Status](https://travis-ci.org/zce/itcast-tms.svg?branch=v4.x)](https://travis-ci.org/zce/itcast-tms)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Dependency Status](https://david-dm.org/zce/itcast-tms.svg)](https://david-dm.org/zce/itcast-tms)
[![devDependency Status](https://david-dm.org/zce/itcast-tms/dev-status.svg)](https://david-dm.org/zce/itcast-tms#info=devDependencies)


This repo is a teaching management system for Itcast, Inc. project. You could use it as a base to build your own desktop app.

## Screenshots

![创建新的测评记录](./assets/screenshot1.png)

![监视操作](./assets/screenshot2.png)

## How to use

First, clone the repo via git:

```bash
$ git clone https://github.com/zce/itcast-tms.git -b v4.x
```

And then install dependencies.

```bash
$ cd itcast-tms
$ npm install
```

### Run it

```bash
$ npm start
```

### Develop it

```bash
$ npm test
```

*Note: requires a node version >= 4 and an npm version >= 2.*


## Native-like UI

If you want to have native-like User Interface (OS X El Capitan and Windows 10), [react-desktop](https://github.com/gabrielbull/react-desktop) may perfect suit for you.


## Maintainers

- [iceStone](https://github.com/zce)


## LICENSE

ISC © [iceStone](https://github.com/zce)


## Thanks

- https://github.com/szwacz/electron-boilerplate
- https://github.com/kristoferjoseph/flexboxgrid
- https://philipwalton.github.io/solved-by-flexbox/
- http://www.juxt.com/pov/thoughts/building-native-desktop-apps-with-web-tech
- https://github.com/GitbookIO/nuts
- https://github.com/ArekSredzki/electron-release-server
- https://github.com/maxogden/extract-zip

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```bash
npm i angular angular-animate angular-route asar babel-preset-es2015 babel-preset-es2015-loose bluebird clean-css concurrently cross-env del electron-packager electron-prebuilt eslint fs-extra gulp gulp-babel gulp-cssnano gulp-gzip gulp-htmlmin gulp-if gulp-less gulp-livereload gulp-load-plugins gulp-rename gulp-size gulp-sourcemaps gulp-uglify gulp-useref gulp-zip minimist normalize.css standard uglify-js --save-dev
cd src/core
npm i body-parser express log4js nodemailer xtemplate xtpl --save
cd ../updater
npm i download got log4js --save
cd ../..
```


## TODOS

- [x] Student submit rate info is empty
- [ ] Email keyworks reject
