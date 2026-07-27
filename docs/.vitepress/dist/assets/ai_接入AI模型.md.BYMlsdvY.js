import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const p="/xhh-blog/assets/image-13.uYIkF2kt.png",_=JSON.parse('{"title":"接入AI模型","description":"","frontmatter":{},"headers":[],"relativePath":"ai/接入AI模型.md","filePath":"ai/接入AI模型.md"}'),t={name:"ai/接入AI模型.md"},l=e(`<h1 id="接入ai模型" tabindex="-1">接入AI模型 <a class="header-anchor" href="#接入ai模型" aria-label="Permalink to &quot;接入AI模型&quot;">​</a></h1><h2 id="调用千问大模型api" tabindex="-1">调用千问大模型API <a class="header-anchor" href="#调用千问大模型api" aria-label="Permalink to &quot;调用千问大模型API&quot;">​</a></h2><p>申请百炼 API key:</p><p><a href="https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key" target="_blank" rel="noreferrer">https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key</a></p><h3 id="文字问答" tabindex="-1">文字问答 <a class="header-anchor" href="#文字问答" aria-label="Permalink to &quot;文字问答&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async chatWithAI(message) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="文生图" tabindex="-1">文生图 <a class="header-anchor" href="#文生图" aria-label="Permalink to &quot;文生图&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async chatWithAI(message) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="流式输出" tabindex="-1">流式输出 <a class="header-anchor" href="#流式输出" aria-label="Permalink to &quot;流式输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// https://help.aliyun.com/zh/model-studio/base-url?spm=a2c4g.11186623.help-menu-2400256.d_0_0_4.49c13011DfPXCv&amp;scm=20140722.H_3042998._.OR_help-T_cn~zh-V_1</span></span>
<span class="line"><span>const url = &#39;https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions&#39;</span></span>
<span class="line"><span>const response = await fetch(url, {</span></span>
<span class="line"><span>  method: &#39;POST&#39;,</span></span>
<span class="line"><span>  credentials: &#39;omit&#39;,</span></span>
<span class="line"><span>  headers: {</span></span>
<span class="line"><span>    &#39;Content-Type&#39;: &#39;application/json&#39;,</span></span>
<span class="line"><span>    &#39;Authorization&#39;: \`Bearer ******\`</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  body: JSON.stringify({</span></span>
<span class="line"><span>    model: &#39;qwen-plus&#39;,</span></span>
<span class="line"><span>    messages: [</span></span>
<span class="line"><span>      { role: &#39;system&#39;, content: &#39;You are a helpful assistant.&#39; },</span></span>
<span class="line"><span>      { role: &#39;user&#39;, content: &#39;请介绍一下自己&#39; }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    stream: true, // 流式请求</span></span>
<span class="line"><span>    stream_options: { include_usage: true }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><img src="`+p+'" alt="alt text"></p><p>文档：</p><p><a href="https://bailian.console.aliyun.com/cn-beijing?spm=5176.support-home.nav-v2-dropdown-menu-0.d_main_2_0.25b0156fNIxxGV&amp;tab=doc&amp;scm=20140722.M_10944401._.V_1#/doc/?type=model&amp;url=2866129" target="_blank" rel="noreferrer">https://bailian.console.aliyun.com/cn-beijing?spm=5176.support-home.nav-v2-dropdown-menu-0.d_main_2_0.25b0156fNIxxGV&amp;tab=doc&amp;scm=20140722.M_10944401._.V_1#/doc/?type=model&amp;url=2866129</a></p><h3 id="dashscope-原生与-openai-兼容模式对比" tabindex="-1">DashScope 原生与 OpenAI 兼容模式对比 <a class="header-anchor" href="#dashscope-原生与-openai-兼容模式对比" aria-label="Permalink to &quot;DashScope 原生与 OpenAI 兼容模式对比&quot;">​</a></h3><table tabindex="0"><thead><tr><th>项目</th><th>DashScope 原生</th><th>OpenAI 兼容模式</th></tr></thead><tbody><tr><td>BaseURL 前缀</td><td><code>https://dashscope.aliyuncs.com/api/v1</code></td><td><code>https://dashscope.aliyuncs.com/compatible-mode/v1</code></td></tr><tr><td>完整对话 POST 地址</td><td><code>/api/v1/services/aigc/text-generation/generation</code></td><td><code>/compatible-mode/v1/chat/completions</code></td></tr><tr><td>请求规范</td><td>阿里云自定义</td><td>OpenAI 标准协议</td></tr><tr><td>推荐 SDK</td><td>dashscope 官方 SDK</td><td>openai SDK、各类 AI 框架</td></tr><tr><td>能否调用 qwen-plus</td><td>可以</td><td>可以</td></tr><tr><td>能否调用百炼内 DeepSeek、GLM 等</td><td>可以</td><td>可以</td></tr></tbody></table><p>三方模型调用教程：</p><p><a href="https://help.aliyun.com/zh/model-studio/deepseek-api#ds-bu-cn-ds-h" target="_blank" rel="noreferrer">https://help.aliyun.com/zh/model-studio/deepseek-api#ds-bu-cn-ds-h</a></p>',17),i=[l];function o(c,d,r,h,m,u){return n(),s("div",null,i)}const g=a(t,[["render",o]]);export{_ as __pageData,g as default};
