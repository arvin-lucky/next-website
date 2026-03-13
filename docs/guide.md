第一步：配置 Next.js 项目以支持静态导出
这是最关键的一步，需要修改项目配置文件，并处理一些兼容性问题。

修改 next.config.js/ts：在项目根目录下，修改配置文件以开启静态导出功能，并设置正确的资源路径。

javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 开启静态导出 [citation:1]
  
  // 如果项目部署在用户/组织站点的子路径下（如 username.github.io/repo-name/），
  // 则需要设置 basePath 为你的仓库名。如果是个人/组织主页（username.github.io/）则不需要。
  basePath: "/你的仓库名", // 例如: "/my-next-app" [citation:3][citation:10]
  
  // 可选：解决某些服务器对路径结尾的处理问题
  // trailingSlash: true,
  
  images: {
    unoptimized: true, // 禁用 Next.js 的图像优化功能，因为它需要服务器支持 [citation:2][citation:10]
  },
};

module.exports = nextConfig;
处理 next/image 组件中的图片：在代码中使用 <Image /> 组件时，需要引入你设置的 basePath 来保证图片路径正确。例如：

jsx
// src/app/page.js 或 pages/index.js
import Image from 'next/image';

// 假设你的 basePath 是 '/my-next-app'
// 那么图片路径会自动处理为 '/my-next-app/your-image.png' 
<Image src="/your-image.png" alt="description" width={500} height={300} />
小提示：直接使用 <img> 标签也是一个简单有效的替代方案，可以完全绕过图像优化问题。 

第二步：构建并生成静态文件
配置完成后，就可以打包项目了。

安装 gh-pages 包（用于后续手动部署）：

bash
npm install --save-dev gh-pages
# 或者
yarn add -D gh-pages
修改 package.json：添加构建和部署的脚本命令。

json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", // 构建命令，会生成 out 文件夹 [citation:1][citation:2]
    "deploy": "touch out/.nojekyll && gh-pages -d out -t" // 手动部署命令 [citation:2][citation:3]
  }
}
touch out/.nojekyll：这个命令会在构建后的 out 文件夹里创建一个名为 .nojekyll 的空文件。这一步非常重要！ 它可以阻止 GitHub Pages 默认的 Jekyll 构建过程，确保 _next 文件夹里的资源能被正确加载。 

gh-pages -d out -t：gh-pages 工具会将 out 文件夹的内容发布到仓库的 gh-pages 分支。-t 参数让它也包含以点（.）开头的文件（即我们刚创建的 .nojekyll）。 

第三步：部署到 GitHub Pages
至此，准备工作全部完成，可以开始部署了。这里提供两种方式：

方式一：手动部署（适合快速测试）
构建项目：在终端运行 npm run build，生成 out 文件夹。

运行部署命令：接着运行 npm run deploy。这会自动将 out 文件夹的内容推送到你仓库的 gh-pages 分支。

配置 GitHub 仓库：

在你的 GitHub 仓库页面，点击 Settings → Pages。

在 "Branch" 下拉菜单中，选择 gh-pages 分支，文件夹选择 / (root)，然后点击 Save。 

等待几分钟，页面会显示你的站点地址 https://你的用户名.github.io/你的仓库名/。

方式二：自动化部署（通过 GitHub Actions，推荐）
如果你希望每次向 main 分支推送代码时都能自动部署，可以配置 GitHub Actions。

在项目根目录创建文件夹和文件：.github/workflows/deploy.yml。

将以下内容粘贴进去：

yaml
name: Deploy Next.js site to GitHub Pages

on:
  push:
    branches: ["main"] # 当推送到 main 分支时触发

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20" # 或你项目使用的版本
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Add .nojekyll file
        run: touch ./out/.nojekyll

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }} # GitHub 自动提供的 token
          publish_dir: ./out # 要部署的文件夹
          publish_branch: gh-pages # 部署到的目标分支
将这个文件提交并推送到 GitHub 仓库的 main 分支后，工作流就会自动运行。之后，你只需在 GitHub 仓库的 Settings → Pages 中，将分支设置为 gh-pages 即可