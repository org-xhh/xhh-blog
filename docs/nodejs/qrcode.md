# qrcodejs2 生成中间带logo的二维码

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
    qrImg.src = canvas.toDataURL()
    qrImg.style.display = 'none'
  }
}
```