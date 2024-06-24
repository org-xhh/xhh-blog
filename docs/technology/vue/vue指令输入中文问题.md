### vue 指令

v-integer0number：

```
// 只能输入0和整数
function integer0NumberFn(el) {
  let value = (el && el.value) || ''

  // 整数，非数字替换为空
  value = value.replace(/[^\d]+/g, '')
  // 可以输入0，01替换为1
  value = value.replace(/^(0(\d+))/, '$2')

  el.value = value

  // 触发v-model的更新
  el.dispatchEvent(new Event('input'))

  // Vue.$forceUpdata() // 慎用，虽然也能解决输入中文后双向绑定失效问题
}
Vue.directive('integer0number', {
  bind(el, binding, vnode) {
    let inputEl =
      (el.getElementsByClassName('el-input__inner') &&
        el.getElementsByClassName('el-input__inner')[0]) ||
      {}
    // 解决输入中文后，检验就发生错误 的问题
    inputEl.addEventListener('compositionstart', () => {
      vnode.locking = true
    })
    inputEl.addEventListener('compositionend', () => {
      vnode.locking = false
    })
    inputEl.addEventListener(
      'keyup',
      () => {
        if (vnode.locking) {
          return
        }
        integer0NumberFn(inputEl)
      },
      false
    )
  }
})
```