import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ai/使用ai工具.md","filePath":"ai/使用ai工具.md"}'),p={name:"ai/使用ai工具.md"},t=e(`<h2 id="调用通义千问大模型api" tabindex="-1">调用通义千问大模型API <a class="header-anchor" href="#调用通义千问大模型api" aria-label="Permalink to &quot;调用通义千问大模型API&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async chatWithAI(message) {</span></span>
<span class="line"><span>    let url = &#39;https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation&#39;</span></span>
<span class="line"><span>    const response = await fetch(url, {</span></span>
<span class="line"><span>    method: &#39;POST&#39;,</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>        &#39;Authorization&#39;: &#39;Bearer YOURTOKEN&#39;,</span></span>
<span class="line"><span>        &#39;Content-Type&#39;: &#39;application/json&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    body: JSON.stringify({</span></span>
<span class="line"><span>        model: &#39;qwen-plus&#39;,</span></span>
<span class="line"><span>        input: { messages: [{ role: &#39;user&#39;, content: message }] }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    const data = await response.json()</span></span>
<span class="line"><span>    return data.output.text</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2),i=[t];function l(c,o,r,d,_,h){return n(),s("div",null,i)}const g=a(p,[["render",l]]);export{m as __pageData,g as default};
