# JavaScript Browser 对象

BOM 全称是 Browser Object Model，浏览器对象模型，它提供了与浏览器交互的方法和接口。

BOM的核心对象是window对象

window：浏览器窗口对象
  - document：文档对象 (document === window.document)
  - history：历史记录对象
  - location：地址栏对象
  - screen：屏幕对象
  - navigator：浏览器对象

## window

https://developer.mozilla.org/zh-CN/docs/Web/API/Window


## history

https://developer.mozilla.org/zh-CN/docs/Web/API/History

## location

https://developer.mozilla.org/zh-CN/docs/Web/API/Location

## screen

https://developer.mozilla.org/zh-CN/docs/Web/API/Screen

## navigator

https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator

#### Navigator.mediaDevices 

<font color=gray>

只读属性，返回一个 MediaDevices 对象，该对象可提供对相机和麦克风等媒体输入设备以及屏幕共享的连接访问。

</font>

#### MediaRecorder

<font color=gray>

MediaRecorder 是 MediaStream Recording API 提供的用来进行媒体轻松录制的接口，他需要通过调用 MediaRecorder() 构造方法进行实例化。

</font>

- 屏幕视频录制
```
const button = document.getElementById('btn')
button.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
    })

    const mime = MediaRecorder.isTypeSupported('video/webm;codecs=h264')
        ? 'video/webm;codecs=h264'
        : 'video/webm'

    const mediaRecorder = new MediaRecorder(stream, { mimeType: mime })

    const chunks = []
    mediaRecorder.addEventListener('dataavailable', function(e) {
        chunks.push(e.data)
    })

    mediaRecorder.addEventListener('stop', () => {
        const blob = new Blob(chunks, { type: chunks[0].type })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'video.webm'
        a.click()
    })
    mediaRecorder.start()
})
```
- 录制音频并上传，实现广播功能
```
if (navigator.mediaDevices) {
    const constraints = { audio: true }
    that.recorderChunks = []

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream)
        that.mediaRecorder = mediaRecorder

        mediaRecorder.start()
        console.log('recorder started ', mediaRecorder.state)

        mediaRecorder.ondataavailable = function(e) {
          that.recorderChunks.push(e.data)
        }
      })
      .catch(function(err) {
        console.log('The following error occured: ' + err)
      })
  }

that.mediaRecorder.stop()
console.log('recorder stopped ', that.mediaRecorder.state)

that.mediaRecorder.onstop = function(e) {
  console.log('data available after MediaRecorder.stop() called.')

  // blob对象
  const blob = new Blob(that.recorderChunks, { 'type': 'audio/amr' })

  that.recorderChunks = []

  // file对象
  const file = new File([blob], 'audio.amr', { type: blob.type })
  // 上传音频
  that.upLoadAudio(file)

  console.log('recorder stopped')
  that.mediaRecorder = ''
}
```
- 调用摄像头并实现拍照功能
```
async function checkCamera() {
  const mediaDevice = window.navigator.mediaDevices
  const devices = await mediaDevice.enumerateDevices()
  if (devices) {
    const stream = await mediaDevice.getUserMedia({
      audio: false,
      video: {
        width: 300,
        height: 300,
        // facingMode: { exact: "environment" }, // 强制后置摄像头
        facingMode: "user" // 前置摄像头
      }
    })
    if (!videoEl.value) return

    videoEl.value.srcObject = stream
    videoEl.value.play()
  }
}
function shoot() {
  if (!videoEl.value || !wrapDom.value) return
  const canvas = document.createElement("canvas")
  canvas.width = videoEl.value.videoWidth
  canvas.height = videoEl.value.videoHeight

  const ctx = canvas.getContext("2d")
  ctx?.drawImage(videoEl.value, 0, 0, canvas.width, canvas.height)
  wrapDom.value.appendChild(canvas)
}
```
