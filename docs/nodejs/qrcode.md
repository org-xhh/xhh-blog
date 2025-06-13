## [qrcodejs2](https://www.npmjs.com/package/qrcodejs2) 生成中间带logo的二维码

```
npm i qrcodejs2 --save-dev
```

```
<div ref="qrCodeUrl" />
```

``` 
/**
 * @description 生成二维码
 * @param {string} url 链接
 * @param {number} w 二维码宽度
 * @param {number} h 二维码高度
 */
createQrcode(url, w = 80, h = 80) {
  let container = this.$refs.qrCodeUrl
  container.innerHTML = ''
  this.qrcode = new QRCode(container, {
    text: url,
    width: w, // 二维码宽度
    height: h, // 二维码高度
    colorDark: '#000',
    colorLight: '#fff',
    correctLevel: QRCode.CorrectLevel.H
  })

  // 二维码中间logo图片
  let logo = new Image()
  logo.crossOrigin = 'Anonymous'
  logo.src = require('@/assets/common/code_logo.png')
  logo.onload = () => {
    let qrImg = this.qrcode._el.getElementsByTagName('img')[0]
    let canvas = this.qrcode._el.getElementsByTagName('canvas')[0]

    canvas.style.display = 'inline-block'
    // canvas.style.display = 'none' // 这个隐藏，显示图片浏览器可识别保存
    let ctx = canvas.getContext('2d')

    // logo白色背景
    let rectScale = 0.26
    let rectWidth = w * rectScale
    let rectHeight = rectWidth
    let rectPosition = (w - rectWidth) / 2
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.rect(rectPosition, rectPosition, rectWidth, rectHeight)
    ctx.fill()

    let logoScale = 0.2
    let logoWidth = w * logoScale
    let logoHeight = logoWidth
    // 中间位置
    let logoPosition = (w - logoWidth) / 2
    ctx.drawImage(logo, logoPosition, logoPosition, logoWidth, logoHeight)

    // 二维码图片url地址
    qrImg.src = canvas.toDataURL() // canvas.toDataURL('image/png')
    qrImg.style.display = 'none'
    // qrImg.style.display = 'block' // 显示图片浏览器长按可识别保存
  }
}
```

## canvas 和 qrcode@1 生成带背景图和文字的二维码
```
<template>
  <footer>
    <div class="footer-content">
      <div>footer</div>
      <img :src="imgUrl" alt="" />
      <canvas id="canvas" width="150" height="150"></canvas>
    </div>
  </footer>
</template>

<script setup>
import QRCode from 'qrcode'
import { ref, onMounted } from 'vue'

let imgUrl = ref('')

onMounted(() => {
  generateQRCode()
})
async function generateQRCode() {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  // 清空画布
  context.clearRect(0, 0, canvas.width, canvas.height)

  const image = new Image()
  image.src = new URL('../assets/images/imgs/img(5).jpg', import.meta.url).href
  image.crossOrigin = 'Anonymous'
  // 等待图片加载完成
  await new Promise((resolve) => {
    image.onload = resolve
  })
  // 绘制图片
  context.drawImage(image, 0, 0, canvas.width, canvas.height)

  // 生成二维码
  const qrUrl = 'https://org-xhh.github.io/xhh-blog/'
  const qrCodeDataUrl = await QRCode.toDataURL(qrUrl)
  const qrCodeImage = new Image()
  qrCodeImage.src = qrCodeDataUrl
  // 等待二维码图片加载完成
  await new Promise((resolve) => {
    qrCodeImage.onload = resolve
  })
  // 绘制二维码图片 x,y,w,h
  context.drawImage(qrCodeImage, 35, 50, 80, 80)

  // 绘制文字
  context.fillStyle = 'red'
  context.font = '16px Arial'
  let txt = 'welcome'
  // 让文字居中
  let txtLeftDis = (150 - context.measureText(txt).width) / 2
  context.fillText(txt, txtLeftDis, 25)

  // canvas生成img图片，手机端可以长按保存
  imgUrl.value = canvas.toDataURL()
}
</script>

<style scoped lang="less">
.footer-content {
  position: relative;
}
#canvas {
  position: absolute;
  top: 50px;
  right: 150px;
}
</style>
```
![alt text](image-14.png)