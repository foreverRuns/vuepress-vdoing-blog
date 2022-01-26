#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'b.XXXX.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  # githubUrl=git@github.com:foreverRuns/vuepress-vdoing-blog.git
  githubUrl=git@github.com:foreverRuns/blog.git
else
  msg='来自github actions的自动部署'
  # githubUrl=https://foreverRuns:${GITHUB_TOKEN}@github.com/foreverRuns/vuepress-vdoing-blog.git
  githubUrl=https://foreverRuns:${GITHUB_TOKEN}@github.com/foreverRuns/blog.git
  git config --global user.name "foreverRuns"
  git config --global user.email "894985240@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
