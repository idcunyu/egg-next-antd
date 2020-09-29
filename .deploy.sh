#!/usr/bin/env bash

cd /tmp
echo '开始解压: tar xzvf egg-next-antd.tar.gz'
tar xzvf egg-next-antd.tar.gz
echo '同步文件到/data/www/egg-next-antd'
rsync -rl --delete --exclude=.git ./egg-next-antd/  /data/www/egg-next-antd
echo '移除: rm -rf egg-next-antd.tar.gz egg-next-antd'
rm -rf egg-next-antd.tar.gz egg-next-antd
echo '切换到项目: cd /data/www/egg-next-antd'
cd /data/www/egg-next-antd

NODE_ENV=production
EGG_SERVER_ENV=prod

echo 'npm install -- 正在安装依赖中...'
npm install
echo "npm run build"
npm run build
echo "npm run stop"
npm run stop
echo "npm run start"
npm run start
