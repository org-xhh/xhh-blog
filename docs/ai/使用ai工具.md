## 调用千问大模型API

申请 API key:

https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key

### 文字问答
```
async chatWithAI(message) {
    let url = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation'
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'omit',
        headers: {
            'Authorization': 'Bearer YOURTOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'qwen-plus',
            input: { messages: [{ role: 'user', content: message }] }
        })
    })
    const data = await response.json()
    return data.output.text
}
```
<!-- sk-0999a1d937594d8abe1456cc0360d193 -->

### 文生图
```
async chatWithAI(message) {
    let url = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation'
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'omit',
        headers: {
            'Authorization': 'Bearer YOURTOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'qwen-image-2.0-pro',
            input: { messages: [{ role: 'user', content: [{ text: message }] }] }
        })
    })
    const data = await response.json()
    return data.output.choices[0].message.content[0].image
}
```