import React, { Component } from 'react';
require('styles/about.scss')

export default class About extends Component {
  render() {
    return(
      <div className="about">
          <div className="content">
              <ul>
                <li>本项目的脚手架使用Yeoman的<a href="https://github.com/newtriks/generator-react-webpack">generator-react-webpack</a>,
                添加使用了PostCSS插件，样式方面部分仿新浪微博的样式，使用es6结合react.js的官网Demo和react-router进行实战练习，
                从而了解react的JSX语法，复合组件，表单处理，单向数据流、生命周期和react-router的使用等等。
                </li>
                <li>
                  本项目用到的图片等素材均来自互联网，如有不便，<a href="mailto:makwaihung@outlook.com">请联系本人</a>。
                </li>
              </ul>
          </div>
      </div>
    )
  }
}
