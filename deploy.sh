#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/wxfwill/typescript-learn.git main

# 返回进入此目录之前所在的目录
# cd -