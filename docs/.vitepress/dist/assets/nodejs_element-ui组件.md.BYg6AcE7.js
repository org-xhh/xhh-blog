import{_ as a,c as s,o as e,a3 as n}from"./chunks/framework.C5U8cnJv.js";const p="/xhh-blog/assets/%E7%BB%84%E4%BB%B6%E9%97%AE%E9%A2%98.DLOF3lEV.png",t="/xhh-blog/assets/clearable%E4%B9%8B%E5%90%8E.CJCFIDKA.png",_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/element-ui组件.md","filePath":"nodejs/element-ui组件.md"}'),l={name:"nodejs/element-ui组件.md"},i=n('<h3 id="el-table-fixed固定列-偶现样式问题的解决方案" tabindex="-1">el-table fixed固定列 偶现样式问题的解决方案 <a class="header-anchor" href="#el-table-fixed固定列-偶现样式问题的解决方案" aria-label="Permalink to &quot;el-table fixed固定列 偶现样式问题的解决方案&quot;">​</a></h3><p>如下图，“商品明细”下面有个横线 <img src="'+p+`" alt="alt text"> 问题原因： 代码里设置了：fixed=&quot;right&quot;，并且在非首次渲染table组件（数据是第一次加载table的时候获取的）会出现这种问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-table-column</span></span>
<span class="line"><span>    label=&quot;操作&quot;</span></span>
<span class="line"><span>    width=&quot;100&quot;</span></span>
<span class="line"><span>    fixed=&quot;right&quot;</span></span>
<span class="line"><span>    align=&quot;center&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>    &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-button size=&quot;mini&quot; type=&quot;text&quot;&gt;商品明细&lt;el-button&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/el-table-column&gt;</span></span></code></pre></div><p>解决方案： 去掉 <code>fixed=&quot;right&quot;</code> 或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::v-deep .el-table__fixed-right {</span></span>
<span class="line"><span>   height: 100% !important;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果是设置的：fixed=&quot;left&quot;，</p><p>解决方案： 去掉 <code>fixed=&quot;left&quot;</code> 或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::v-deep .el-table__fixed {</span></span>
<span class="line"><span>   height: 100% !important;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="el-cascader-设置clearable清空后还有高亮选中样式" tabindex="-1">el-cascader 设置clearable清空后还有高亮选中样式 <a class="header-anchor" href="#el-cascader-设置clearable清空后还有高亮选中样式" aria-label="Permalink to &quot;el-cascader 设置clearable清空后还有高亮选中样式&quot;">​</a></h3><p><img src="`+t+`" alt="alt text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;el-cascader</span></span>
<span class="line"><span>    ref=&quot;typeCascader&quot;</span></span>
<span class="line"><span>    v-model=&quot;searchGoodsType&quot;</span></span>
<span class="line"><span>    filterable</span></span>
<span class="line"><span>    placeholder=&quot;请选择分类&quot;</span></span>
<span class="line"><span>    :options=&quot;goodsTypeList&quot;</span></span>
<span class="line"><span>    :props=&quot;goodsTypeProps&quot;</span></span>
<span class="line"><span>    clearable</span></span>
<span class="line"><span>    @change=&quot;handleTypeChange&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>handleTypeChange(data) {</span></span>
<span class="line"><span>    if (!data || !data.length) {</span></span>
<span class="line"><span>        this.$refs.typeCascader.$refs.panel.checkedValue = [] // 清空选中值</span></span>
<span class="line"><span>        this.$refs.typeCascader.$refs.panel.clearCheckedNodes() // 清空级联选择器选中状态</span></span>
<span class="line"><span>        this.$refs.typeCascader.$refs.panel.activePath = [] // 清除高亮</span></span>
<span class="line"><span>        this.$refs.typeCascader.$refs.panel.syncActivePath() // 初始化（只展示一级节点）</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="el-date-picker-在页面全屏情况下-点击无效果-无法弹出选择时间弹框" tabindex="-1">el-date-picker 在页面全屏情况下，点击无效果，无法弹出选择时间弹框 <a class="header-anchor" href="#el-date-picker-在页面全屏情况下-点击无效果-无法弹出选择时间弹框" aria-label="Permalink to &quot;el-date-picker 在页面全屏情况下，点击无效果，无法弹出选择时间弹框&quot;">​</a></h3><p>解决方式：给该组件添加 :append-to-body=&quot;false&quot;</p>`,13),c=[i];function o(d,r,h,u,g,b){return e(),s("div",null,c)}const f=a(l,[["render",o]]);export{_ as __pageData,f as default};
