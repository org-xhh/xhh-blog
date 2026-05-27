import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image.Cr2fdC7N.png",t="/xhh-blog/assets/image-1.CRqmOhmn.png",m=JSON.parse('{"title":"Python","description":"","frontmatter":{},"headers":[],"relativePath":"technology/python/python.md","filePath":"technology/python/python.md"}'),l={name:"technology/python/python.md"},i=p(`<h1 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;Python&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><a href="https://www.python.org/downloads/" target="_blank" rel="noreferrer">https://www.python.org/downloads/</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python --version</span></span>
<span class="line"><span># 或</span></span>
<span class="line"><span>python -V</span></span></code></pre></div><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><p>在终端运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python</span></span></code></pre></div><p><img src="`+e+'" alt="alt text"></p><p>在 VSCode 中运行：</p><p>先安装 Microsoft 出品的 Python 插件，然后新建 .py 文件，点击右上角运行按钮。 <img src="'+t+`" alt="alt text"></p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>变量名支持字母、下划线、数字。但不能在变量名里加入空格，不能以数字开头。</p><p>变量名 = 值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>msg = &quot;你好&quot;</span></span>
<span class="line"><span>print(msg)</span></span></code></pre></div><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 这是单行注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>这是多行注释</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><h2 id="条件判断" tabindex="-1">条件判断 <a class="header-anchor" href="#条件判断" aria-label="Permalink to &quot;条件判断&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>grade = 98</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if grade &gt;= 90:</span></span>
<span class="line"><span>    print(&quot;优&quot;)</span></span>
<span class="line"><span>elif 80 &lt;= grade &lt; 90:</span></span>
<span class="line"><span>    print(&quot;良&quot;)</span></span>
<span class="line"><span>elif 60 &lt;= grade &lt; 80:</span></span>
<span class="line"><span>    print(&quot;中&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;差&quot;)</span></span></code></pre></div><h2 id="条件运算符" tabindex="-1">条件运算符 <a class="header-anchor" href="#条件运算符" aria-label="Permalink to &quot;条件运算符&quot;">​</a></h2><p>与：and</p><p>或：or</p><p>取反：not</p><h2 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-label="Permalink to &quot;循环&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for 项 in 序列:</span></span>
<span class="line"><span>    代码块</span></span></code></pre></div><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>food_list = [&quot;糖果&quot;, &quot;巧克力&quot;, &quot;薯片&quot;, &quot;棒棒糖&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取列表元素</span></span>
<span class="line"><span>food_list[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># len: 查看列表长度</span></span>
<span class="line"><span>len(food_list)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># append: 在列表末尾添加元素</span></span>
<span class="line"><span>food_list.append(&quot;可乐&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># insert: 在列表指定位置插入元素</span></span>
<span class="line"><span>food_list.insert(1, &quot;果冻&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># remove: 删除指定值的元素</span></span>
<span class="line"><span>food_list.remove(&quot;薯片&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># pop: 删除指定索引的元素</span></span>
<span class="line"><span>food_list.pop(1)</span></span></code></pre></div><h2 id="字典" tabindex="-1">字典 <a class="header-anchor" href="#字典" aria-label="Permalink to &quot;字典&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>grade = {</span></span>
<span class="line"><span>    &quot;html&quot;: 100,</span></span>
<span class="line"><span>    &quot;js&quot;: 99,</span></span>
<span class="line"><span>    &quot;css&quot;: 88</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(grade[&#39;js&#39;])</span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 定义函数</span></span>
<span class="line"><span>def 函数名(参数1, 参数2, ...):</span></span>
<span class="line"><span>    代码块</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 调用函数</span></span>
<span class="line"><span>函数名()</span></span></code></pre></div><h2 id="引入模块" tabindex="-1">引入模块 <a class="header-anchor" href="#引入模块" aria-label="Permalink to &quot;引入模块&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import 模块名</span></span></code></pre></div>`,32),o=[i];function c(h,d,r,u,g,b){return n(),s("div",null,o)}const v=a(l,[["render",c]]);export{m as __pageData,v as default};
