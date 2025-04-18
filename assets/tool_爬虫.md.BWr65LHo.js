import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const f=JSON.parse('{"title":"爬虫","description":"","frontmatter":{},"headers":[],"relativePath":"tool/爬虫.md","filePath":"tool/爬虫.md"}'),e={name:"tool/爬虫.md"},l=p(`<h1 id="爬虫" tabindex="-1">爬虫 <a class="header-anchor" href="#爬虫" aria-label="Permalink to &quot;爬虫&quot;">​</a></h1><h2 id="cheerio" tabindex="-1">cheerio <a class="header-anchor" href="#cheerio" aria-label="Permalink to &quot;cheerio&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 抓取热点新闻</span></span>
<span class="line"><span>const https = require(&#39;https&#39;)</span></span>
<span class="line"><span>const cheerio = require(&#39;cheerio&#39;)</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>https.get(&#39;https://top.baidu.com/board?platform=pc&amp;sa=pcindex_entry&#39;, function (res) {</span></span>
<span class="line"><span>    let html = &#39;&#39;</span></span>
<span class="line"><span>    res.on(&#39;data&#39;, function (chunk) {</span></span>
<span class="line"><span>        html += chunk</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    res.on(&#39;end&#39;, function () {</span></span>
<span class="line"><span>        const $ = cheerio.load(html)</span></span>
<span class="line"><span>        let allFiles = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $(&#39;.list_1EDla &gt; a&#39;).each(function () {</span></span>
<span class="line"><span>            const title = $(&#39;.c-single-text-ellipsis&#39;, this).html().trim()</span></span>
<span class="line"><span>            allFiles.push({</span></span>
<span class="line"><span>                title: title</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        fs.writeFile(&#39;./files.json&#39;, JSON.stringify(allFiles), function (err, data) {</span></span>
<span class="line"><span>            if (err) {</span></span>
<span class="line"><span>                throw err</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            console.log(&#39;文件保存成功&#39;)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,3),t=[l];function i(c,o,r,h,d,_){return a(),n("div",null,t)}const m=s(e,[["render",i]]);export{f as __pageData,m as default};
