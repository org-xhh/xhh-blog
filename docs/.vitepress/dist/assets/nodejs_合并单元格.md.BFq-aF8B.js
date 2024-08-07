import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/合并单元格.md","filePath":"nodejs/合并单元格.md"}'),e={name:"nodejs/合并单元格.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>getTableSpanList(list = [], rowFlag) {</span></span>
<span class="line"><span>  for (let i = 0; i &lt; list.length; i++) {</span></span>
<span class="line"><span>    let orderItem = list[i] || {}</span></span>
<span class="line"><span>    let rowspan = 1</span></span>
<span class="line"><span>    let firstId = orderItem[rowFlag]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let j = 0; j &lt; list.length; j++) {</span></span>
<span class="line"><span>      if (j &gt;= 0 &amp;&amp; j &lt; i &amp;&amp; list[j][rowFlag] === firstId) {</span></span>
<span class="line"><span>          rowspan = 0</span></span>
<span class="line"><span>          break</span></span>
<span class="line"><span>        } else if (j &gt; i &amp;&amp; list[j][rowFlag] === firstId) {</span></span>
<span class="line"><span>          rowspan++</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let itemList = [i, rowspan]</span></span>
<span class="line"><span>    this.tableSpanList.push(itemList)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-table</span></span>
<span class="line"><span>  :span-method=&quot;objectSpanMethod&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>objectSpanMethod({ row, column, rowIndex, columnIndex }) {</span></span>
<span class="line"><span>  let columnMergeList = [0, 1, 10] // 复选框，图片，操作</span></span>
<span class="line"><span>  if (columnMergeList.indexOf(columnIndex) !== -1) {</span></span>
<span class="line"><span>    for (let i = 0; i &lt; this.tableSpanList.length; i++) {</span></span>
<span class="line"><span>      let spanItemList = this.tableSpanList[i] || {}</span></span>
<span class="line"><span>      if (rowIndex === spanItemList[0]) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          rowspan: spanItemList[1],</span></span>
<span class="line"><span>          colspan: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return [1, 1]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2),t=[l];function i(c,o,r,d,m,_){return a(),n("div",null,t)}const u=s(e,[["render",i]]);export{g as __pageData,u as default};
