import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-8.CccVnORx.png",f=JSON.parse('{"title":"接入AI模型","description":"","frontmatter":{},"headers":[],"relativePath":"ai/接入AI模型.md","filePath":"ai/接入AI模型.md"}'),l={name:"ai/接入AI模型.md"},t=p(`<h1 id="接入ai模型" tabindex="-1">接入AI模型 <a class="header-anchor" href="#接入ai模型" aria-label="Permalink to &quot;接入AI模型&quot;">​</a></h1><h2 id="调用千问大模型api" tabindex="-1">调用千问大模型API <a class="header-anchor" href="#调用千问大模型api" aria-label="Permalink to &quot;调用千问大模型API&quot;">​</a></h2><p>申请百炼 API key:</p><p><a href="https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key" target="_blank" rel="noreferrer">https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key</a></p><h3 id="文字问答" tabindex="-1">文字问答 <a class="header-anchor" href="#文字问答" aria-label="Permalink to &quot;文字问答&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async chatWithAI(message) {</span></span>
<span class="line"><span>    let url = &#39;https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation&#39;</span></span>
<span class="line"><span>    const response = await fetch(url, {</span></span>
<span class="line"><span>        method: &#39;POST&#39;,</span></span>
<span class="line"><span>        credentials: &#39;omit&#39;,</span></span>
<span class="line"><span>        headers: {</span></span>
<span class="line"><span>            &#39;Authorization&#39;: &#39;Bearer YOURTOKEN&#39;,</span></span>
<span class="line"><span>            &#39;Content-Type&#39;: &#39;application/json&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        body: JSON.stringify({</span></span>
<span class="line"><span>            model: &#39;qwen-plus&#39;,</span></span>
<span class="line"><span>            input: { messages: [{ role: &#39;user&#39;, content: message }] }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    const data = await response.json()</span></span>
<span class="line"><span>    return data.output.text</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="流式输出" tabindex="-1">流式输出 <a class="header-anchor" href="#流式输出" aria-label="Permalink to &quot;流式输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div @click=&quot;chatWithAIFn&quot;&gt;请介绍一下自己&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;chat-stream&quot;&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;chatStreaming&quot;&gt;接收中...&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;pre class=&quot;chat-content&quot;&gt;{{ chatContent }}&lt;/pre&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;chatError&quot; class=&quot;error&quot;&gt;错误: {{ chatError.message }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;chatUsageRaw&quot; class=&quot;usage&quot;&gt;使用量: {{ chatUsageRaw }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chatStreaming: false, // 是否正在流式接收</span></span>
<span class="line"><span>chatContent: &#39;&#39;, //存放流式输出文本</span></span>
<span class="line"><span>chatError: null,</span></span>
<span class="line"><span>chatUsageRaw: &#39;&#39;, // 存放 usage 原始 JSON 字符串</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chatWithAIFn() {</span></span>
<span class="line"><span>  // 清空，开始接收</span></span>
<span class="line"><span>  this.chatContent = &#39;&#39;</span></span>
<span class="line"><span>  this.chatError = null</span></span>
<span class="line"><span>  this.chatStreaming = true</span></span>
<span class="line"><span>  this.chatWithAI().then(() =&gt; {</span></span>
<span class="line"><span>    this.chatStreaming = false</span></span>
<span class="line"><span>  }).catch(err =&gt; {</span></span>
<span class="line"><span>    this.chatStreaming = false</span></span>
<span class="line"><span>    this.chatError = err</span></span>
<span class="line"><span>    this.$message.error(&#39;聊天失败&#39;)</span></span>
<span class="line"><span>    console.error(err)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>async chatWithAI() {</span></span>
<span class="line"><span>  const url = &#39;https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions&#39;</span></span>
<span class="line"><span>  const response = await fetch(url, {</span></span>
<span class="line"><span>    method: &#39;POST&#39;,</span></span>
<span class="line"><span>    credentials: &#39;omit&#39;,</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>      &#39;Content-Type&#39;: &#39;application/json&#39;,</span></span>
<span class="line"><span>      &#39;Authorization&#39;: \`Bearer ******\`</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    body: JSON.stringify({</span></span>
<span class="line"><span>      model: &#39;qwen-plus&#39;,</span></span>
<span class="line"><span>      messages: [</span></span>
<span class="line"><span>        { role: &#39;system&#39;, content: &#39;You are a helpful assistant.&#39; },</span></span>
<span class="line"><span>        { role: &#39;user&#39;, content: &#39;请介绍一下自己&#39; }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      stream: true, // 流式请求</span></span>
<span class="line"><span>      stream_options: { include_usage: true }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!response.ok) {</span></span>
<span class="line"><span>    const txt = await response.text()</span></span>
<span class="line"><span>    throw new Error(\`请求失败: \${response.status} \${txt}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 如果服务器不返回流，直接返回整体文本</span></span>
<span class="line"><span>  if (!response.body) {</span></span>
<span class="line"><span>    const text = await response.text()</span></span>
<span class="line"><span>    // 尝试从整体响应中解析 usage</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      const j = JSON.parse(text)</span></span>
<span class="line"><span>      if (j.usage) {</span></span>
<span class="line"><span>        try { this.chatUsageRaw = JSON.stringify(j.usage) } catch (e) { this.chatUsageRaw = String(j.usage) }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (j.choices &amp;&amp; j.choices[0]) {</span></span>
<span class="line"><span>        const finalText = (j.choices[0].message &amp;&amp; j.choices[0].message.content) || j.choices[0].text || &#39;&#39;</span></span>
<span class="line"><span>        this.chatContent += finalText</span></span>
<span class="line"><span>        return finalText</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } catch (e) {</span></span>
<span class="line"><span>      // not JSON, treat as plain text</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.chatContent += text</span></span>
<span class="line"><span>    return text</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const reader = response.body.getReader()</span></span>
<span class="line"><span>  const decoder = new TextDecoder(&#39;utf-8&#39;)</span></span>
<span class="line"><span>  let done = false; let value; let buffer = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 持续读取每个 chunk</span></span>
<span class="line"><span>  while (!done) {</span></span>
<span class="line"><span>    ({ done, value } = await reader.read())</span></span>
<span class="line"><span>    if (done) break</span></span>
<span class="line"><span>    const chunk = decoder.decode(value, { stream: true })</span></span>
<span class="line"><span>    buffer += chunk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 处理常见的 SSE / data: ... 行格式（按行解析）</span></span>
<span class="line"><span>    const lines = buffer.split(&#39;\\n&#39;)</span></span>
<span class="line"><span>    buffer = lines.pop() // 最后一行可能不完整，保留到下一次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (const line of lines) {</span></span>
<span class="line"><span>      if (!line.trim()) continue</span></span>
<span class="line"><span>      // SSE 风格： data: {...}</span></span>
<span class="line"><span>      if (line.startsWith(&#39;data:&#39;)) {</span></span>
<span class="line"><span>        const dataStr = line.replace(/^data:\\s*/, &#39;&#39;)</span></span>
<span class="line"><span>        if (dataStr === &#39;[DONE]&#39;) {</span></span>
<span class="line"><span>          // 完成信号</span></span>
<span class="line"><span>          done = true</span></span>
<span class="line"><span>          break</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>          const json = JSON.parse(dataStr)</span></span>
<span class="line"><span>          // 如果包含 usage，保存为字符串（覆盖之前的）</span></span>
<span class="line"><span>          if (json.usage) {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>              this.chatUsageRaw = JSON.stringify(json.usage)</span></span>
<span class="line"><span>            } catch (e) {</span></span>
<span class="line"><span>              this.chatUsageRaw = String(json.usage)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          // 根据常见的 stream JSON 结构提取文本（可根据实际接口调整）</span></span>
<span class="line"><span>          let delta = &#39;&#39;</span></span>
<span class="line"><span>          if (Array.isArray(json.choices)) {</span></span>
<span class="line"><span>            json.choices.forEach(c =&gt; {</span></span>
<span class="line"><span>              if (c.delta &amp;&amp; c.delta.content) delta += c.delta.content</span></span>
<span class="line"><span>              if (c.text) delta += c.text</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          } else if (json.text) {</span></span>
<span class="line"><span>            delta = json.text</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          this.chatContent += delta</span></span>
<span class="line"><span>        } catch (e) {</span></span>
<span class="line"><span>          // 非 JSON，直接追加</span></span>
<span class="line"><span>          this.chatContent += dataStr</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 不是 data: 行，直接追加</span></span>
<span class="line"><span>        this.chatContent += line</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 处理剩余 buffer（若为 JSON 或纯文本）</span></span>
<span class="line"><span>  if (buffer) {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      const json = JSON.parse(buffer)</span></span>
<span class="line"><span>      if (json.usage) {</span></span>
<span class="line"><span>        try { this.chatUsageRaw = JSON.stringify(json.usage) } catch (e) { this.chatUsageRaw = String(json.usage) }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (json.choices &amp;&amp; json.choices[0]) {</span></span>
<span class="line"><span>        const finalText = (json.choices[0].message &amp;&amp; json.choices[0].message.content) || json.choices[0].text || &#39;&#39;</span></span>
<span class="line"><span>        this.chatContent += finalText</span></span>
<span class="line"><span>      } else if (json.text) {</span></span>
<span class="line"><span>        this.chatContent += json.text</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        this.chatContent += buffer</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } catch (e) {</span></span>
<span class="line"><span>      this.chatContent += buffer</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    buffer = &#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return this.chatContent</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+e+`" alt="alt text"></p><p>文档：</p><p><a href="https://bailian.console.aliyun.com/cn-beijing?spm=5176.support-home.nav-v2-dropdown-menu-0.d_main_2_0.25b0156fNIxxGV&amp;tab=doc&amp;scm=20140722.M_10944401._.V_1#/doc/?type=model&amp;url=2866129" target="_blank" rel="noreferrer">https://bailian.console.aliyun.com/cn-beijing?spm=5176.support-home.nav-v2-dropdown-menu-0.d_main_2_0.25b0156fNIxxGV&amp;tab=doc&amp;scm=20140722.M_10944401._.V_1#/doc/?type=model&amp;url=2866129</a></p><h3 id="文生图" tabindex="-1">文生图 <a class="header-anchor" href="#文生图" aria-label="Permalink to &quot;文生图&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async chatWithAI(message) {</span></span>
<span class="line"><span>  let url = &#39;https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation&#39;</span></span>
<span class="line"><span>  const response = await fetch(url, {</span></span>
<span class="line"><span>    method: &#39;POST&#39;,</span></span>
<span class="line"><span>    credentials: &#39;omit&#39;,</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>      &#39;Authorization&#39;: &#39;Bearer YOURTOKEN&#39;,</span></span>
<span class="line"><span>      &#39;Content-Type&#39;: &#39;application/json&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    body: JSON.stringify({</span></span>
<span class="line"><span>      model: &#39;qwen-image-2.0-pro&#39;,</span></span>
<span class="line"><span>      input: { messages: [{ role: &#39;user&#39;, content: [{ text: message }] }] }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  const data = await response.json()</span></span>
<span class="line"><span>  return data.output.choices[0].message.content[0].image</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,14),i=[t];function c(o,r,h,d,u,g){return a(),n("div",null,i)}const b=s(l,[["render",c]]);export{f as __pageData,b as default};
