# create-react-app

## 项目环境

| 模块             | 版本 |
| ---------------- | ---- |
| node             | 18+  |
| react            | 18+  |
| react-dom        | 18+  |
| react-router-dom | 6+   |
| react-redux      | 9+   |
| @reduxjs/toolkit | 2+   |

## 新建项目

```
npx creat-react-app react-project
```

## 配置路由

```
npm i react-router-dom
```

index.js:

```
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
```

App.js:

```
import { useRoutes } from "react-router-dom"
import routes from './router/index.js'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes> */}
        {element}
      </header>
    </div>
  );
}
```

router/index.js:

```
import Home from '../pages/home.js'
import Login from '../pages/login.js'
import NotFound from '../pages/notFound.js'

let routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
]
export default routes
```

## 路由鉴权

router/index.js:

```
import Auth from './authRouter.js'

const authRoutes = (routes) => {
    return routes.map((item) => {
        if (item.needAuth) {
            return {
                path: item.path,
                element: (
                    <Auth>
                        {item.element}
                    </Auth>
                )
            }
        } else {
            delete item.needAuth
            return item
        }
    })
}

export default authRoutes(routes)
```

authRouter.js:

```

import { getToken } from "../utils/storage";
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({ children }) => {
    const hasToken = getToken()
    const location = useLocation()
    if (hasToken) {
        if (location.pathname === '/login') {
            return <Navigate to="/" replace />
        } else {
            return <>{children}</>
        }
    } else {
        // 未登录
        if (location.pathname === '/login') {
            return <>{children}</>
        } else {
            return <Navigate to="/login" replace />
        }
    }
}

export default Auth
```

## 路由传参

#### useSearchParams

```
// 携带参数
navigate('/page3?origin=home')

// 获取
import { useSearchParams } from "react-router-dom"
function Page3() {
    let [searchParams] = useSearchParams();
    console.log(searchParams.get('origin'))
    ...
}
```

#### useParams

```
// 配置路由
{
  path: '/Page1/:id',
  element: <Page1 />
}

// 携带参数
<Link to="/page1/111">go Page1</Link>

// 获取
import { useParams } from 'react-router-dom';
function Page1() {
  const params = useParams();
  console.log('id:', params.id)
  ...
}
```

#### useLocation

```
// 携带参数
<Link to="/page1/111" state={{name:666}}>go Page1</Link>

// 获取
import { useLocation } from "react-router-dom";
function Page1() {
  console.log('data:', useLocation().state)
  ...
}
```

## 样式使用

#### 直接在 JS 文件中引入样式文件

```
import './App.css';
```

#### inline 样式

```
const divStyle = {
  color: 'red',
  marginBottom: '10px'
};

return <div style={divStyle}>content</div>
```

```
<div style={{ cursor: 'pointer',marginTop: '50px' }}>
  内容
</div>
```

## 使用 scss

create-react-app 内置了 scss 预处理器，只需要安装

```
npm install node-sass@8 sass-loader --save-dev
```

备注：node@18 对应 node-sass@8

<font size=3 color=#ccc>要使用 less 的话，需要 npm run eject 暴露出 webpack 修改配置 或 使用其他工具。</font>

## 状态管理 Redux

#### 安装

```
npm install @reduxjs/toolkit react-redux -S
```

#### 为 React 提供 Redux Store

index.js:

```
import store from './store/index.js'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

```

#### 创建 Redux State Slice

store/counterSlice.js:

```
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

#### 将 Slice Reducers 添加到 Redux Store 中

store/index.js:

```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

#### 在 React 组件中使用 Redux 状态和操作

```
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/counterSlice'

function Page2() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

    return <div>
      <main>Welcome to Page2</main>
      <div>{count}</div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment 5
        </button>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
}

export default Page2;
```

#### 页面效果

![alt text](image.png)

## 配置多环境

Create React App 搭建的项目，npm run start 指向 development，npm run build 指向 production，通过 process.env.NODE_ENV 获取。

#### 第一种方式：使用 cross-env

```
// 安装 cross-env
npm i cross-env -D

// 配置不同环境命令
"build:release": "cross-env REACT_APP_ENV=release react-scripts build"

// 获取
process.env.REACT_APP_ENV // release
```

#### 第二种方式：使用 dotenv

安装

```
npm install dotenv-cli -D
```

自定义环境变量名

![alt text](image-1.png)

```
// 配置
"start": "dotenv -e .env.release react-scripts start",

// 获取
process.env.REACT_APP_ENV // release
```

## 异步请求 axios

安装

```
npm i axios
```

config.js:

```
// 不同环境接口地址
const apiList = {
    development: "https://www.dev.com/",
    production: "https://www.prod.com/",
    release: "https://www.release.com/"
}
const env = process.env.REACT_APP_ENV
export const baseUrl = apiList[env]
```

axios.js:

```
import axios from 'axios'

import { baseUrl } from './config'

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl,
  timeout: 30000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // config.headers['token'] = ''

    return config
  },
  error => {
    // 请求失败
    return error
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data || {}
    if (res.code !== 200) {

    }
    return res
  },
  // 处理错误响应
  error => {
    if (error.response && error.response.status === 401) {

    } else if (error.response && error.response.status === 403) {

    }
    return Promise.reject(error)
  }
)

export default service

```

api.js:

```
import request from '../axios/index'

export function getInitData(data) {
  return request({
    url: '/data',
    method: 'get',
    params: data
  })
}

export function setInitData(data) {
  return request({
    url: '/setdata',
    method: 'post',
    data
  })
}
```

## 父子组件交互

父组件：

```
import Button from '../components/button'

function Page1() {
  const buttonObj = {
    title: '点击按钮',
    bgColor: 'red'
  }
  // 点击子组件按钮时触发
  function handleChildFn(msg) {
    console.log('父组件接收消息：', msg)
  }

  return <div>
    {/* <Button title={buttonObj.title} bgColor={buttonObj.bgColor} /> */}
    <Button {...buttonObj} onMessageChange={handleChildFn} />
  </div>
}

export default Page1;
```

子组件：

```
function Button(props) {
  const buttonStyle = {
    padding: '5px 10px',
    fontSize: '16px',
    lineHeight: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
    backgroundColor: props.bgColor
  }
  function clickFn() {
    props.onMessageChange('来自子组件')
  }

  return <div style={buttonStyle} onClick={clickFn}>
    <span>{props.title}</span>
  </div>
}

export default Button;
```

---

gitee 源码：

https://gitee.com/org-xhh/react-project
