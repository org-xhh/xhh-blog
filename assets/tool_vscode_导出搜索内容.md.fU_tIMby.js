import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-5.Doy-EcNw.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"tool/vscode/导出搜索内容.md","filePath":"tool/vscode/导出搜索内容.md"}'),l={name:"tool/vscode/导出搜索内容.md"},t=p('<p>VSCode 搜索项目文件中所有的中文，导出到一个文件中 <img src="'+e+`" alt="alt text"></p><p>编写 LangTool.java 文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class LangTool {</span></span>
<span class="line"><span>    static final String regex = &quot;[\\\\u4e00-\\\\u9fa5]+&quot;;</span></span>
<span class="line"><span>    static Pattern pattern = Pattern.compile(regex);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws IOException {</span></span>
<span class="line"><span>        var sourceFolder = Paths.get(&quot;F:\\\\file\\\\project-name\\\\src\\\\views&quot;);</span></span>
<span class="line"><span>        var resultFile = Paths.get(&quot;F:\\\\langs.csv&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var resultLines = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Files.walk(sourceFolder, 100).forEach(p -&gt; {</span></span>
<span class="line"><span>            if (!Files.isRegularFile(p)) {</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            var fileName = p.getFileName().toString();</span></span>
<span class="line"><span>            if (!fileName.endsWith(&quot;.vue&quot;) &amp;&amp; !fileName.endsWith(&quot;.js&quot;) &amp;&amp; !fileName.endsWith(&quot;.html&quot;)) {</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            Path folderName = sourceFolder.relativize(p);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                List&lt;String&gt; lines = null;</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    lines = Files.readAllLines(p, StandardCharsets.UTF_8);</span></span>
<span class="line"><span>                } catch (java.nio.charset.MalformedInputException e) {</span></span>
<span class="line"><span>                    lines = Files.readAllLines(p, Charset.forName(&quot;GBK&quot;));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                for (String line : lines) {</span></span>
<span class="line"><span>                    Matcher matcher = pattern.matcher(line);</span></span>
<span class="line"><span>                    while (matcher.find()) {</span></span>
<span class="line"><span>                        String s = line.trim();</span></span>
<span class="line"><span>                        if (s.startsWith(&quot;//&quot;)) {</span></span>
<span class="line"><span>                            continue;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        if (s.startsWith(&quot;/*&quot;)) {</span></span>
<span class="line"><span>                            continue;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        if (s.startsWith(&quot;&lt;!--&quot;)) {</span></span>
<span class="line"><span>                            continue;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        int i = line.indexOf(&quot;//&quot;);</span></span>
<span class="line"><span>                        if (i &gt; 0 &amp;&amp; i &lt; matcher.start()) {</span></span>
<span class="line"><span>                            continue;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        var langLine = String.format(&quot;\\&quot;%s\\&quot;,\\&quot;%s\\&quot;,\\&quot;%s\\&quot;&quot;, matcher.group(0), folderName, s);</span></span>
<span class="line"><span>                        resultLines.add(langLine);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        System.out.println(langLine);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } catch (IOException e) {</span></span>
<span class="line"><span>                System.err.println(&quot;读取文件 &quot; + p + &quot; 时出错：&quot; + e.getMessage());</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>                throw new RuntimeException(e);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       Files.write(resultFile, resultLines, StandardCharsets.UTF_8);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>搭建 java 环境：</p><ul><li>下载 sdk</li><li>配置环境变量 JAVA_HOME: D:\\xhh-software\\java\\jdk-23.0.2</li><li>在 Path 变量中新增：%JAVA_HOME%\\bin</li><li>验证配置，执行 java -version，输出 java version &quot;23.0.2&quot; ，ok</li></ul><p>执行命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javac LangTool.java</span></span></code></pre></div><p>生成 LangTool.class 文件；</p><p>然后再执行命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>java LangTool</span></span></code></pre></div><p>生成含有中文和所在文件目录指向的文件 langs.csv。</p>`,11),i=[t];function c(o,r,u,d,h,g){return a(),n("div",null,i)}const _=s(l,[["render",c]]);export{v as __pageData,_ as default};
