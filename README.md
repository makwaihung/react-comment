# React Comment 项目说明


---
本项目的脚手架使用Yeoman的[generator-react-webpack](https://github.com/newtriks/generator-react-webpack),添加使用了PostCSS插件，样式方面部分仿新浪微博的样式，使用es6结合react.js的官网Demo进行实战练习，从而了解react的JSX语法，复合组件，表单处理，单向数据流和生命周期。


##主要技术栈：

 - Webpack
 - ES6
 - React.js
 - 野狗(wilddogio)作为后端
 - scss

## 用法
``` bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

## 展示
![react comment](src/images/demo.png)

## 规划
 - 添加propTypes进行接口限制
 - 增加新功能（eg.角色、性别、头像选择，数据分页处理，滚动加载等等。）
 - 引入 react-router进行实战练习
 -  ...




  [1]: propTypes
