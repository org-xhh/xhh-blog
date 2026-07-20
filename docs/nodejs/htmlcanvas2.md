```
const canvas = await html2canvas(node, {
    useCORS: true,         // 允许跨域图片
    allowTaint: true,      // 允许污染画布
    scale: 2,              // 提升清晰度，解决高分屏模糊问题
    backgroundColor: null, // 保持透明背景
    
    // 忽略页面中的 script 和 iframe 标签，防止阻塞或异常
    ignoreElements: (element) => {
        const tag = element.tagName?.toUpperCase();
        return tag === 'SCRIPT' || tag === 'IFRAME';
    }
})

const dataUrl = canvas.toDataURL('image/png');

const link = document.createElement('a');
link.download = `页面截图_${Date.now()}.png`;
link.href = dataUrl;

document.body.appendChild(link);
link.click();
document.body.removeChild(link);
```
