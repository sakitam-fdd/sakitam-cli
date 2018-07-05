## sakitam-cli

> A scaffolding tool for rapid develop vue & react and other project。

[![Build Status](https://travis-ci.org/sakitam-fdd/sakitam-cli.svg?branch=master)](https://www.travis-ci.org/sakitam-fdd/sakitam-cli)
[![NPM downloads](https://img.shields.io/npm/dm/sakitam-cli.svg)](https://npmjs.org/package/sakitam-cli)
[![Npm package](https://img.shields.io/npm/v/sakitam-cli.svg)](https://www.npmjs.org/package/sakitam-cli)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sakitam-fdd/sakitam-cli/master/LICENSE)

## Quickstart

```bash
npm install -g sakitam-cli
# or
yarn global add sakitam-cli

// list available templete
sakitam list
// output usage information
sakitam list -h
// params: Template view under the specified warehouse
sakitam list -u aurorafe -p vue
// output usage information
sakitam init -h
// generate project
sakitam init sakitam-gis/maptalks-plugin-tpl-base project
// Defaults associated repository `aurorafe`, so, you can use
sakitam init vue-template-webpack project
// Use cached template
sakitam init --offline vue-template-webpack project
cd project
npm i
npm run dev
```

## example

```bash
sakitam list vue // list vue project templete
sakitam list react // list react project templete
sakitam list library // list javascript library templete
sakitam list react-component // list react component templete
sakitam list vue-component // list vue component templete

// init
sakitam init vue-template-webpack project // repo
sakitam init aurorafe/vue-template-webpack project // user/repo
sakitam init --offline vue-template-webpack project // Use cached template
sakitam init -c direct:https://github.com/aurorafe/vue-template-webpack.git project // Use git clone ~ direct is important
```

## Development

```bash
git clone https://github.com/sakitam-fdd/sakitam-cli.git
cd sakitam-cli
npm link
sakitam -h
```

| package name | desc | link |
| :--- | :---------- | :----- |
| `commander ` | `用于处理命令行相关工具` | https://github.com/tj/commander.js |
| `download-git-repo ` | `用于下载git仓库` | https://github.com/flipxfx/download-git-repo |
| `chalk` | `处理终端信息显示的颜色` | https://github.com/chalk/chalk |
| `inquirer` | `交互终端，用于处理用户输入` | https://github.com/SBoudrias/Inquirer.js |
| `ora` | `终端loading解决方案` | https://github.com/sindresorhus/ora |
| `shelljs` | `shell 命令执行, 支持回调` | https://github.com/shelljs/shelljs |
| `read-metadata` | `用于读取json或者yaml元数据文件并返回一个对象` | https://www.npmjs.com/package/read-metadata |
| `minimatch` | `字符匹配工具` | https://github.com/isaacs/minimatch |
| `semver` | `版本号处理工具` | https://github.com/npm/node-semver |
| `user-home` | `用于获取用户的根目录` | https://github.com/sindresorhus/user-home |
| `tildify` | `Convert an absolute path to a tilde path: `/Users/sindresorhus/dev` → `~/dev` | https://github.com/sindresorhus/tildify |
| `rimraf` | `A deep deletion module for node (like `rm -rf`)` | https://github.com/isaacs/rimraf |
| `axios` | `跨平台的ajax处理工具` | https://github.com/axios/axios |
| `handlebars` | `易于构建的模板引擎` | https://github.com/wycats/handlebars.js |
| `metalsmith` | `An extremely simple, pluggable static site generator.` | https://github.com/segmentio/metalsmith |
| `multimatch` | `对 minimatch 的多字符串处理的扩展` | https://github.com/sindresorhus/multimatch |
| `consolidate` | `支持多种模板引擎的渲染` | https://github.com/tj/consolidate.js |
| `consolidate` | `支持多种模板引擎的渲染` | https://github.com/tj/consolidate.js |
| `async` | `用于异步代码的高阶函数和通用模型` | https://github.com/caolan/async |
| `validate-npm-package-name` | `用于验证npm包` | https://github.com/npm/validate-npm-package-name |
| `figlet` | `A FIG Driver written in JavaScript which aims to fully implement the FIGfont spec.` | https://github.com/patorjk/figlet.js |
