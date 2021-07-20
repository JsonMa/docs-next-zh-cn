(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{691:function(t,s,a){"use strict";a.r(s);var n=a(58),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"生产环境部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产环境部署"}},[t._v("#")]),t._v(" 生产环境部署")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("INFO")]),a("p",[t._v("如果你使用 "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI"),a("OutboundLink")],1),t._v("，下面的大多数提示都是默认启用的。此部分仅当你使用自定义构建设置时才相关。")])]),a("h2",{attrs:{id:"开启生产环境模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启生产环境模式"}},[t._v("#")]),t._v(" 开启生产环境模式")]),t._v(" "),a("p",[t._v("在开发期间，Vue 提供了许多警告，以帮助你处理常见的错误和隐患。但是，这些警告字符串在生产环境中会变得无意义，并且会增大应用程序的负担。此外，有些警告检查的运行时成本很小，可以在"),a("a",{attrs:{href:"https://cli.vuejs.org/guide/mode-and-env.html#modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("生产环境模式"),a("OutboundLink")],1),t._v("中避免。")]),t._v(" "),a("h3",{attrs:{id:"不使用构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不使用构建工具"}},[t._v("#")]),t._v(" 不使用构建工具")]),t._v(" "),a("p",[t._v("如果你正在使用完整的构建，即直接通过脚本标签引入 Vue，而不使用构建工具，那么请确保在生产环境中使用压缩版。这可以在"),a("RouterLink",{attrs:{to:"/guide/installation.html#cdn"}},[t._v("安装指南")]),t._v("中找到。")],1),t._v(" "),a("h3",{attrs:{id:"使用构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用构建工具"}},[t._v("#")]),t._v(" 使用构建工具")]),t._v(" "),a("p",[t._v("当使用 Webpack 或 Browserify 这样的构建工具时，生产环境模式将由 Vue 的源代码中的 "),a("code",[t._v("process.env.NODE_ENV")]),t._v(" 决定，默认为开发模式。这两种构建工具都提供了重写这个变量以启用 Vue 的生产模式的方法，并且在构建过程中警告将被压缩工具删除。Vue CLI 已经为你预先配置了这个，不过了解它的工作原理会更好：")]),t._v(" "),a("h4",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" Webpack")]),t._v(" "),a("p",[t._v("在 Webpack 4+，你可以使用 "),a("code",[t._v("mode")]),t._v(" 选项：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"browserify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browserify"}},[t._v("#")]),t._v(" Browserify")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将当前的环境变量 "),a("code",[t._v("NODE_ENV")]),t._v(" 设置为 "),a("code",[t._v('"production"')]),t._v(" 作为运行的打包命令。它告诉 "),a("code",[t._v("vueify")]),t._v(" 避免引入热重载和开发相关的代码。")])]),t._v(" "),a("li",[a("p",[t._v("将一个全局的 "),a("a",{attrs:{href:"https://github.com/hughsk/envify",target:"_blank",rel:"noopener noreferrer"}},[t._v("envify"),a("OutboundLink")],1),t._v(" 转换应用到你的包中。这使得压缩工具可以删除包裹在环境变量条件块中的Vue源代码中的所有警告。例如:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production browserify -g envify -e main.js "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" uglifyjs -c -m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" build.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("或者，利用 Gulp 使用 "),a("a",{attrs:{href:"https://github.com/hughsk/envify",target:"_blank",rel:"noopener noreferrer"}},[t._v("envify"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the envify custom module to specify environment variables")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" envify "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'envify/custom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("browserify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("browserifyOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Required in order to process node_modules files")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("envify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("或者，利用 Grunt 和 "),a("a",{attrs:{href:"https://github.com/jmreidy/grunt-browserify",target:"_blank",rel:"noopener noreferrer"}},[t._v("grunt-browserify"),a("OutboundLink")],1),t._v(" 使用 "),a("a",{attrs:{href:"https://github.com/hughsk/envify",target:"_blank",rel:"noopener noreferrer"}},[t._v("envify"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the envify custom module to specify environment variables")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" envify "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'envify/custom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbrowserify"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function to deviate from grunt-browserify's default order")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        b\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vueify'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Required in order to process node_modules files")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("envify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])])])]),t._v(" "),a("h4",{attrs:{id:"rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[t._v("#")]),t._v(" Rollup")]),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://github.com/rollup/plugins/tree/master/packages/replace",target:"_blank",rel:"noopener noreferrer"}},[t._v("@rollup/plugin-replace"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" replace "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@rollup/plugin-replace'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'process.env.NODE_ENV'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"预编译模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预编译模板"}},[t._v("#")]),t._v(" 预编译模板")]),t._v(" "),a("p",[t._v("当使用 DOM 内模板或 JavaScript 内模板字符串时，将动态地执行从模板到渲染函数的编译。在大多数情况下，这已经足够快了，但是如果应用程序对性能敏感，最好避免这样做。")]),t._v(" "),a("p",[t._v("预编译模板最简单的方法是使用"),a("RouterLink",{attrs:{to:"/guide/single-file-component.html"}},[t._v("单文件组件")]),t._v("——相关的构建设置自动为你执行预编译，所以构建代码包含已经编译的渲染函数，而不是原始的模板字符串。")],1),t._v(" "),a("p",[t._v("如果你正在使用 Webpack，并且更喜欢将 JavaScript 和模板文件分开，你可以使用 "),a("a",{attrs:{href:"https://github.com/ktsn/vue-template-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-template-loader"),a("OutboundLink")],1),t._v("，它还可以在构建步骤中将模板文件转换为 JavaScript 渲染函数。")]),t._v(" "),a("h2",{attrs:{id:"提取组件css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取组件css"}},[t._v("#")]),t._v(" 提取组件CSS")]),t._v(" "),a("p",[t._v("当使用单文件组件时，组件内部的 CSS 会通过 JavaScript 以 "),a("code",[t._v("<style>")]),t._v(" 标签的形式被动态注入。这有一个小的运行时成本，如果你使用服务器端渲染，它将导致“无样式内容的闪现” 。将所有组件的 CSS 提取到同一个文件中可以避免这些问题，还可以更好地压缩和缓存 CSS。")]),t._v(" "),a("p",[t._v("参考各自的构建工具文档，看看它是如何做的:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org/en/configurations/extract-css.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack + vue-loader"),a("OutboundLink")],1),t._v(" ("),a("code",[t._v("vue-cli")]),t._v(" webpack 模板已经预先配置了这个)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vueify#css-extraction",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserify + vueify"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://rollup-plugin-vue.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rollup + rollup-plugin-vue"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"跟踪运行时错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跟踪运行时错误"}},[t._v("#")]),t._v(" 跟踪运行时错误")]),t._v(" "),a("p",[t._v("如果在组件渲染期间发生运行时错误，它将被传递到全局的 "),a("code",[t._v("app.config.errorHandler")]),t._v(" 配置函数，如果它已经被设置。将这个钩子与错误跟踪服务如 "),a("a",{attrs:{href:"https://sentry.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentry"),a("OutboundLink")],1),t._v(" 一起使用可能是一个好主意，它为 Vue 提供了"),a("a",{attrs:{href:"https://sentry.io/for/vue/",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个官方集成"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);