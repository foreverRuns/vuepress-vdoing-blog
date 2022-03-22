#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果是 github action 自动部署，动态生成 secret.js. (因为私密性，本地的 secret.js 记录在 .gitignore 中，不会上传到仓库)
if [ "$GITHUB_TOKEN" ]; then
  echo "module.exports = {
    // clientID: '${GITALK_CLIENTID}',
    // clientSecret: '${GITALK_CLIENTSECRET}',
    appId: '${VALINE_APPID}',
    appKey: '${VALINE_APPKEY}'
  }" > docs/.vuepress/config/secrets.js
fi

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# 如果发布到自定义域名，请使用，不填则使用 GitHub 自带的 <username>.github.io
echo 'www.runss.top' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='yarn deploy 本地手动部署'  #yarn deploy
  # githubUrl=https://github.com/foreverRuns/vuepress-vdoing-blog.git
  githubUrl=https://github.com/foreverRuns/foreverruns.github.io.git
else
  msg='Github actions 自动部署'
  # githubUrl=https://foreverRuns:${GITHUB_TOKEN}@github.com/foreverRuns/vuepress-vdoing-blog.git
  githubUrl=https://foreverRuns:${GITHUB_TOKEN}@github.com/foreverRuns/foreverruns.github.io.git
  # Omit --global to set the identity only in this repository.
  git config --global user.name "RunSS11"
  git config --global user.email "894985240@qq.com"
  # git branch -m main master
fi
git init 
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 将master分支 推送到 blog仓库下的 gh-pages分支

# 退回开始所在目录
cd -
# 删除打包项目
rm -rf docs/.vuepress/dist
