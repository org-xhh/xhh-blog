
## 调用通义千问大模型API
```
async chatWithAI(message) {
    let url = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation'
    const response = await fetch(url, {
    method: 'POST',
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