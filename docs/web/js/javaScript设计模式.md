# javaScript设计模式

## 单例模式

单例模式确保某个类只有一个实例。

在 Vue 中，全局的 Vue 构造函数本身就是一个单例对象，通常只会创建一个 Vue 实例，用于管理应用的生命周期和全局配置。
```
const app = new Vue({
  data: {
    text: 'Hello, Vue'
  }
});
```

## 观察着模式
观察者模式是软件设计模式中的一种，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己。
```
class Subject {
     constructor() {
         this.observers = []
     }
     addObserver(observer) {
         this.observers.push(observer)
     }
     removeObserver(observer) {
         this.observers = this.observers.filter((obs) => obs !== observer)
     }
     notify(data) {
         this.observers.forEach((observer) => observer.updated(data))
     }
}
class Observer {
     constructor(name) {
         this.name = name
     }
     updated(data) {
         console.log(this.name + ' 收到通知：' + data)
     }
}
const subject = new Subject()
const observer1 = new Observer('观察者1')
const observer2 = new Observer('观察者2')
subject.addObserver(observer1)
subject.addObserver(observer2)
subject.notify('更新') // 观察者1 收到通知：更新   观察者2 收到通知：更新
subject.removeObserver(observer1)
subject.notify('再次更新') // 观察者2 收到通知：再次更新

```