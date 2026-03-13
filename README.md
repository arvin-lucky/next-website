# Developer Guide

## 技术栈

- [React.js](https://react.dev/)
- [Next.js (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Redux](https://redux-toolkit.js.org/)
- [@headlessui/react](https://headlessui.com/react) - 无样式UI组件库
- [@heroicons/react](https://heroicons.com/) - 图标库
<!-- - [Ant Design](https://ant.design/components/overview-cn/) -->
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Docker](https://www.docker.com/)
- [Nodemon](https://nodemon.io/)
- [Turbopack](https://turbo.build/pack)
- ...

## Development

> Node Version >= v20.16.0

1. 安装依赖

```zsh
pnpm install 
```

2. 运行开发环境

```zsh
pnpm run dev
```

3. 在浏览器中访问：[http://localhost:3000](http://localhost:3000)


## Git

> **git commit 遵循 commitlint 规范，详情可见：https://github.com/conventional-changelog/commitlint**

- 主开发迭代分支：

> 1.  基于master分支创建
> 2.  使用 "feature/" 开头，并加上该迭代版本号 如：feature/v1.0.0
> 3.  多人开发情况下，可在版本号后添加个人自定义标识 如：feature/v1.0.0-xxx

- QA分支：release/qa

> 注意不要将QA分支代码往其他开发等分支进行合并

- 上线分支：

> 1. 基于master分支创建
> 2. 合并开发分支代码
> 3. 使用 "release/" 开头，后缀为上线当天年月日 如：release/2024-12-01
> 4. 线上问题使用 hotfix/ 开头的分支进行修复，后缀为问题描述 如：hotfix/login-bug

