FROM node:16-alpine as builder

WORKDIR /code

# 单独分离 package.json，是为了安装依赖可最大限度利用缓存
ADD package.json yarn.lock /code/
RUN yarn

ADD . /code
RUN npm run docs:build

# 选择更小体积的基础镜像
FROM nginx:alpine
ADD deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder docs/.vitepress/dist /usr/share/nginx/html