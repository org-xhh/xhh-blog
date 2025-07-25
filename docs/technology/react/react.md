- [React](https://zh-hans.react.dev/)
<!-- - [React](https://react.docschina.org/learn)
- [React 中文网](https://react.nodejs.cn/learn) -->
- [React Router](https://reactrouter.com/en/main/start/overview)
- [Redux](https://www.reduxjs.cn/)
- [Create React App](https://create-react-app.bootcss.com/)
<!-- - [Create React App 中文网](https://cra.nodejs.cn/docs/documentation-intro) -->
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Ant Design](https://ant.design/docs/react/introduce-cn)
<!-- - [TypeScript中文手册](https://typescript.bootcss.com/basic-types.html) -->
- [TypeScript](https://www.tslang.cn/docs/handbook/basic-types.html)
- [antd-pro](https://pro.ant.design/docs/getting-started)
- [dva](https://dvajs.com/guide)
- [Umi](https://umijs.org/)
- [Umi Max](https://umijs.org/docs/max/introduce)

> React 是一个用于构建用户界面（UI）的 JavaScript 库

> 创建应用

```
npx create-react-app my-app --template typescript
```
or
```
npm create vite -- --template react-ts
```

> Next.js 是一个流行的、基于 React 构建的轻量级框架，用于构建静态和服务器端渲染的应用程序。

```
npx create-next-app@latest
```

### JSX
JSX是Javascript和XML(HTML)的缩写，表示在JS代码中编写HTML模板结构。
是JS的语法扩展，浏览器本身不能识别，需要通过解析工具解析之后才能在浏览器中运行。

通过大括号{}识别JavaScript中的表达式。

注意：if语句，switch语句，变量声明属于语句，不是表达式，不能出现在{}中。

```
// 组件（函数）首字母必须大写
function App() {
  let list = [
    {
      id:1,
      title: '标题一'
    },
    {
      id: 2,
      title: '标题二'
    }
  ]

  return (
    <div className="App">
      <ul>
        {
          list.map((item) => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
```

### 动态类名
```
<div className={`nav ${isActive && 'active'}`}>
```
或使用 classnames 库
```
<div className={classnames('nav', {active: isActive})}>
```

### 事件绑定
```
function App() {
  function handleClick(e) {
    console.log(e.target.innerHTML)
  }
  const handleClickButton = (params1, e)=> {
    console.log('click button：', params1, e)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>button</button>
      <button onClick={(e)=>handleClickButton('Hi', e)}>button</button>
    </div>
  );
}

export default App;
```