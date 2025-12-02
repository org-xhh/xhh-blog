# vue 指令

### 只能输入0和整数(输入中文问题)

v-integer0number：

```
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
  // 在初始阶段一次性配置
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

### 输入金额保持两位小数
```
// 2位小数
function twoDecimalfn(el) {
  let value = (el && el.value) || ''

  value = value.replace(/[^\d.]/g, '')
  value = value.replace(/\.{2,}/g, '.')
  value = value.replace(/^\./g, '0.')
  value = value.replace(/^\d*\.\d*\./g, value.substring(0, value.length - 1))
  value = value.replace(/^0[^\.]+/g, '0')
  value = value.replace(/^(\d+)\.(\d\d).*$/, '$1.$2')

  el.value = value

  // 触发v-model的更新
  el.dispatchEvent(new Event('input'))

  // Vue.$forceUpdata() // 慎用，虽然也能解决输入中文后双向绑定失效问题
}
Vue.directive('twodecimal', {
  bind(el, binding, vnode) {
    let inputEl =
      (el.getElementsByClassName('el-input__inner') &&
        el.getElementsByClassName('el-input__inner')[0]) ||
      {}
    // 解决中文输入双向绑定失效问题
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
        twoDecimalfn(inputEl)
      },
      false
    )
  }
})
```

### 输入金额显示千分位
```
Vue.directive('inputThousands', {
  // 当元素绑定到父节点
  inserted(el, binding) {
    const input = el.querySelector('input') || el
    input.addEventListener('input', formatThousand)
    input.addEventListener('blur', formatThousand)
    input.addEventListener('focus', removeFormat)

    function formatThousand(e) {
      let value = e.target.value.replace(/,/g, '')
      if (!value) return

      // 输入框显示保留两位小数（但是v-model绑定的value没被限制）
      if (value.indexOf('.') > -1) {
        const arr = value.split('.')
        value = arr[0] + '.' + arr[1].substring(0, 2)
      }

      // 千分位格式化
      const parts = value.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      e.target.value = parts.join('.')
    }

    function removeFormat(e) {
      e.target.value = e.target.value.replace(/,/g, '')
    }
  }
})

<el-input v-twodecimal v-inputThousands ...
```