---
sidebarDepth: 2
---

# markdown使用方法 <Badge text="基础用法"/>

[Markdown](https://www.runoob.com/markdown/md-tutorial.html) 能被使用来撰写电子书，如：Gitbook。\
当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、简书、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。

## 表格
+ <big>**-:**</big>  设置内容和标题栏居右对齐。
+ <big>**:-**</big> 设置内容和标题栏居左对齐。
+ <big>**:-:**</big> 设置内容和标题栏居中对齐。
+ 设置表格单元格宽度，在表头设置  `<div style="width:500px">样式名</div>`

| 左对齐 | 右对齐 | <div style="width:500px"> 居中对齐 </div> |
| :---- | -----: | :-----: |
| 左对齐的内容 | 右对齐的内容 | 居中对齐的内容|
| 单元格 | 单元格 | 单元格 |

```
| 左对齐 | 右对齐 | <div style="width:500px"> 居中对齐 </div> |
| :----- | -----: | :-----: |
| 左对齐的内容 | 右对齐的内容 | 居中对齐的内容|
| 单元格 | 单元格 | 单元格 |
```
## 文本样式 
### 加粗、斜体、删除线、下划线 、上标、下标、小号字体、大号字体
----------
| <div style="width:80px">样式名</div> | <div style="width:80px">效果</div>| Markdown | 
| :-----: | :----: | :------ |
| 斜体  | *文本* | `*文本*` 或 `_文本_`，用一个*或一个_包围文本 | 
| 加粗 |**文本**| `**加粗**` 或 `__文本__`，用两个*或两个_包围文本 | 
| 粗斜体  | ***文本*** | `***文本***` 或 `___文本___`，用三个*或三个_包围文本 | 
| 删除线 | ~~文本~~ | `~~文本~~` |
| 下划线 | <u>文本</u> | `<u>文本</u>` | 
| 上标 | 文本<sup>上标</sup> | `文本<sup>上标</sup>` | 
| 下标 | 文本<sub>下标</sub> | `文本<sub>下标</sub>` | 
| 小号字体 |  <small>小号字体</small> | `<small>小号字体</small>` | 
| 大号字体 |  <big>大号字体</big> | `<big>大号字体</big>` | 


## 自定义容器 <Badge text="默认主题"/>

**输入**

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**输出**

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

你也可以自定义块中的标题：

````md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
````

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

**参考:**

- [vuepress-plugin-container](https://vuepress-community.netlify.app/en/plugins/container/#vuepress-plugin-container)

## 代码块中的语法高亮

VuePress 使用了 [Prism](https://prismjs.com/) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

**输入**

````
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**输出**

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

**输入**

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

在 Prism 的网站上查看 [合法的语言列表](https://prismjs.com/#languages-list)。


## 代码块中的行高亮

**输入**

````
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行以外，你也可指定多行，行数区间，或是两者都指定。

- 行数区间: 例如 `{5-8}`, `{3-10}`, `{10-17}`
- 多个单行: 例如 `{4,7,9}`
- 行数区间与多个单行: 例如 `{4,7-13,16,23-27,40}`

**Input**

````
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
````

**Output**

``` js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## 代码块行号

你可以通过配置来为每个代码块显示行号：全局配置位置 `docs/.vuepress/config.js`

``` js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

## 链接

### 内部链接

网站内部的链接，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。

以如下的文件结构为例：

```
.
├─ README.md
├─ guide
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ project
   ├─ README.md
   ├─ p1.md
   └─ p2.md
```

假设你现在在 `markdown/README.md` 中：
> [Home](/)  
> [guide](/guide/)  
> [markdown 代码块中的行高亮](./#代码块中的行高亮)  
> [project - p1](../project/p1.md)  

``` md
[Home](/) <!-- 跳转到根部的 README.md -->
[guide](/guide/) <!-- 跳转到 guide 文件夹的 index.html -->
[markdown 代码块中的行高亮](./#代码块中的行高亮) <!-- 跳转到 markdown/index.html 的特定标题位置 -->
[project - p1](../guide/p1.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[project - p1](../guide/p1.html) <!-- 也可以用 .html -->
```

### 外部链接

> [Markdown](https://www.runoob.com/markdown/md-tutorial.html)
``` md
[Markdown](https://www.runoob.com/markdown/md-tutorial.html)
```