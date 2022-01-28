#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# 如果发布到自定义域名，请使用，不填则使用 GitHub 自带的 <username>.github.io
# echo 'blog.runs.cn' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='yarn deploy 本地手动部署'  #yarn deploy
  # githubUrl=git@github.com:foreverRuns/vuepress-vdoing-blog.git
  githubUrl=git@github.com:foreverRuns/blog.git
else
  msg='GithuGb ActiAons 自动部署'
  # githubUrl=https://foreverRuns:${GITHUB_TOKEN}@github.com/foreverRuns/vuepress-vdoing-blog.git
  githubUrl=https://foreverRuns:${GITHUB_TOKEN}@github.com/foreverRuns/blog.git
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
