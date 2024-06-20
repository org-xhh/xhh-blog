# Web Workers

Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。

在 worker 内，不能直接操作 DOM 节点，也不能使用 window 对象的默认方法和属性。

self 对象是在 Web Workers 中引入的一个全局对象，用于表示当前执行上下文的全局范围。

## worker 特性检测
```
if (window.Worker) {
  // …
}
```

## 创建 worker
```
const myWorker = new Worker("worker.js")
```

## 消息的接收和发送

可以通过 postMessage() 方法和 onmessage 事件处理函数触发 worker 的方法

## 终止 worker

myWorker.terminate()

## demo
使用 Web Workers 检测页面是否长时间未操作

main.vue
```
let timeCount = 0 // 页面失效弹框只提醒一次

const myWorker = new Worker('/worker.js')
// 向worker.js线程发送消息，开始
onTimeStart()
myWorker.addEventListener('message', (e) => {
  // 从worker.js接收消息
  console.log(e.data)
  // N分钟内未操作提示页面失效
  if (e.data.sum >= 30) {
    onTimeEnd() // worker.js 停止向主线程发送消息

    let tipTxt = '当前页面长时间未操作'
    // 停留在当前页面失效
    if (document.visibilityState === 'visible') {
      console.log(tipTxt)
      timeCount = 1
    }
    // 切换回当前页面，发现失效
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState == 'visible' && timeCount == 0) {
        console.log(tipTxt)
        timeCount = 1
      }
    })
  }
})
function onTimeStart() {
  myWorker.postMessage('start')
}
function onTimeEnd() {
  myWorker.postMessage('end')
}
```
worker.js
```
// 切换页面 setInterval会停止计时，web worker不会
let timer = null
self.addEventListener('message', (e) => {
  console.log(e.data) // 接收主线程发送的消息

  let sum = 0
  let msg

  if (e.data === 'start') {
    timer = setInterval(() => {
      sum += 1
      msg = { sum }
      self.postMessage(msg)
    }, 1000)
  } else if (e.data === 'end') {
    clearInterval(timer)
    timer = null
  }
})
```

## 参考文档

https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers
