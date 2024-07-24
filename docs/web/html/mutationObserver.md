# MutationObserver

MutationObserver 是一个可以监听 DOM 结构变化的接口。当 DOM 对象树发生变动时，MutationObserver 会得到通知。

```
// 需要观察的节点
let targetNode = document.getElementById('root')

// observer配置项
let config = { attributes: true, childList: true, subtree: true }

// 节点发生变化时需要执行的函数
let callback = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('子节点新增或删除')
    } else if (mutation.type === 'attributes') {
      console.log(mutation.attributeName + '节点属性值变化')
    }
  }
}

// 创建 observer
let observer = new MutationObserver(callback)
observer.observe(targetNode, config)

// 停止 observer
// observer.disconnect()
```