## sakitam-cli

> 一个项目生成的脚手架工具。

## Quickstart

```bash
npm install -g sakitam-cli
# or
yarn global add sakitam-cli

// list available templete
sakitam list
// generate project
sakitam init sakitam-gis/maptalks-plugin-tpl-base project
cd project
npm i
npm run dev
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
