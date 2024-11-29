import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/swiper.DpL3wur3.jpg",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/swiper使用.md","filePath":"nodejs/swiper使用.md"}'),l={name:"nodejs/swiper使用.md"},i=p(`<h3 id="swiper3-4-2" tabindex="-1">swiper3.4.2 <a class="header-anchor" href="#swiper3-4-2" aria-label="Permalink to &quot;swiper3.4.2&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 引入</span></span>
<span class="line"><span>let Swiper = &#39;&#39;</span></span>
<span class="line"><span>if (!process.server) {</span></span>
<span class="line"><span>  Swiper = require(&#39;swiper&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>import &#39;swiper/dist/css/swiper.min.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实例化</span></span>
<span class="line"><span>new Swiper(&#39;#supplierSwiper&#39;, {</span></span>
<span class="line"><span>    direction: &#39;horizontal&#39;,</span></span>
<span class="line"><span>    slidesPerView: 3, // 默认显示几张图</span></span>
<span class="line"><span>    centeredSlides: true, // 中间显示第一个</span></span>
<span class="line"><span>    spaceBetween: 21,</span></span>
<span class="line"><span>    grabCursor: true,</span></span>
<span class="line"><span>    autoplay: 3000,</span></span>
<span class="line"><span>    autoplayDisableOnInteraction: false, // grab移开可以继续轮播</span></span>
<span class="line"><span>    loop: true,</span></span>
<span class="line"><span>    loopAdditionalSlides: 1, // 不补的话左滑有空白</span></span>
<span class="line"><span>    // initialSlide: 1,</span></span>
<span class="line"><span>    prevButton: &#39;.swiper-button-prev&#39;,</span></span>
<span class="line"><span>    nextButton: &#39;.swiper-button-next&#39;,</span></span>
<span class="line"><span>    pagination: &#39;.swiper-pagination&#39;,</span></span>
<span class="line"><span>    onClick: (swiper, event) =&gt; {</span></span>
<span class="line"><span>        // 触发点击事件</span></span>
<span class="line"><span>        let slideIndex = parseInt(swiper.clickedSlide &amp;&amp; swiper.clickedSlide.dataset.swiperSlideIndex)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        consolelog(this.list[slideIndex])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// dom</span></span>
<span class="line"><span>&lt;div id=&quot;supplierSwiper&quot; class=&quot;swiper-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul class=&quot;swiper-wrapper&quot;&gt;</span></span>
<span class="line"><span>        &lt;li</span></span>
<span class="line"><span>            v-for=&quot;item in list&quot;</span></span>
<span class="line"><span>            :key=&quot;item.id&quot;</span></span>
<span class="line"><span>            class=&quot;swiper-slide&quot;</span></span>
<span class="line"><span>            &gt;</span></span>
<span class="line"><span>            {{ item.title }}</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;swiper-button-prev&quot; /&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;swiper-button-next&quot; /&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;swiper-pagination&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 中间大两边小</span></span>
<span class="line"><span>.swiper-slide-next {</span></span>
<span class="line"><span>    transform: scale(0.9);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.swiper-slide-prev {</span></span>
<span class="line"><span>    transform: scale(0.9);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>效果图：</p><p><img src="`+e+`" alt="alt text"></p><h3 id="swiper7-4-1" tabindex="-1">swiper7.4.1 <a class="header-anchor" href="#swiper7-4-1" aria-label="Permalink to &quot;swiper7.4.1&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 引入</span></span>
<span class="line"><span>import Swiper, { Autoplay, Navigation, Pagination } from &#39;swiper&#39;</span></span>
<span class="line"><span>Swiper.use([Autoplay, Navigation, Pagination])</span></span>
<span class="line"><span>import &#39;swiper/swiper-bundle.min.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实例化</span></span>
<span class="line"><span>new Swiper(&#39;#supplierSwiper&#39;, {</span></span>
<span class="line"><span>    direction: &#39;horizontal&#39;,</span></span>
<span class="line"><span>    slidesPerView: 3, // 默认显示几张图</span></span>
<span class="line"><span>    centeredSlides: true, // 中间显示第一个</span></span>
<span class="line"><span>    spaceBetween: 21,</span></span>
<span class="line"><span>    grabCursor: true,</span></span>
<span class="line"><span>    autoplay: {</span></span>
<span class="line"><span>        delay: 3000,</span></span>
<span class="line"><span>        disableOnInteraction: false</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    loop: true,</span></span>
<span class="line"><span>    // loopAdditionalSlides: 1, // 不补的话左滑有空白</span></span>
<span class="line"><span>    // initialSlide: 1,</span></span>
<span class="line"><span>    navigation: {</span></span>
<span class="line"><span>        nextEl: &#39;.swiper-button-next&#39;,</span></span>
<span class="line"><span>        prevEl: &#39;.swiper-button-prev&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    pagination: {</span></span>
<span class="line"><span>        el: &#39;.swiper-pagination&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    on: {</span></span>
<span class="line"><span>        click: function(swiper) {</span></span>
<span class="line"><span>            console.log(&#39;你点了Swiper&#39;, swiper.clickedSlide &amp;&amp; swiper.clickedSlide.dataset.swiperSlideIndex)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Swiper默认容器由.swiper-container改为.swiper</span></span></code></pre></div>`,6),t=[i];function c(r,o,d,u,w,g){return a(),n("div",null,t)}const _=s(l,[["render",c]]);export{m as __pageData,_ as default};
