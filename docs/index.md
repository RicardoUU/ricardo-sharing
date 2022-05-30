---   
home: true
heroImage: /img/logo.png
actionText: 来啰来啰 →
actionLink: /pages/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 VitePress 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VitePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
# footer: MIT Licensed | Copyright © Ricardo2022 {% link text url [external] [title] %}.
# footer: sss [MIT](https://github.com/vuejs/vitepress/blob/main/LICENSE)
# govlink: https://markdown.com.cn
beianhao: 桂ICP备2022001902号-1
copyright: Copyright © Ricardo2022
---

<p align="center"> {{ $frontmatter.copyright }}
  <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer"> {{ $frontmatter.beianhao }} </a>
</p>

<!-- <script type="module">
  import {initWpkReporter} from '../utils/web-repoter/wpk-repoter'
  initWpkReporter();
</script> -->
<script type="module">
  if (typeof window !== 'undefined') {
  !(function(c,i,e,b){var h = i.createElement("script");var f = i.getElementsByTagName("script")[0];h.type = "text/javascript";h.crossorigin = true;h.onload = function(){try {c[b]||(c[b] = new c.wpkReporter({bid: 'f4lk9dwi-liptdp1w',spa: true,  plugins: []}));c[b].installAll();} catch (e) {console.error('init wpkReporter fail', e);}};f.parentNode.insertBefore(h, f);h.src = e})(window, document, "https://g.alicdn.com/woodpeckerx/jssdk??wpkReporter.js", "__wpk");
  // ✅ Can use window here
} else {
  console.log('You are on the server')
  // ⛔️ Don't use window here
}
</script>