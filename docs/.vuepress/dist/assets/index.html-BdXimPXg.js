import{_ as t,o as e,c as a,e as o}from"./app-B6iXF0Jq.js";const n={},s=o('<h2 id="单尾检验与双尾检验" tabindex="-1"><a class="header-anchor" href="#单尾检验与双尾检验"><span>单尾检验与双尾检验</span></a></h2><ul><li><strong>假设有一个新的肿瘤治疗方案，我们希望新治疗方案的疗效较传统治疗更好</strong></li><li>**为了探究新的抗肿瘤治疗方案是否疗效更优，故进行含6个患者的小临床试验，其中3个患者接受传统治疗方案，另外3个患者接受新的治疗方案。**将治疗疗效结果表示在坐标轴上，从左至右表示疗效从好至差。该数据提示新治疗方案的疗效似乎更好，但是有部分数据并未得出此结论（如下），故两种方案的疗效优劣并不明确。</li></ul><div style="text-align:center;"><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/one-tail/onetail1.jpg" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/one-tail/onetail2.jpg" alt=""></p></div><p>进行统计学检验：</p><ul><li><strong>在单尾检验时，得出p值=0.03，p值小于常见显著性水平的阈值0.05。</strong></li><li><strong>在双尾检验时，得出p值=0.06，p值大于常见显著性水平阈值0.05。</strong></li></ul><p>那么在这种情况下应该选择哪个计算的阈值？</p><p>单尾检验得出的p值检验的假设是： <strong>主观认为新治疗方案的疗效更好</strong>，故假设是否新的治疗方案优于传统治疗方案；该检验假设并没有区分新治疗方案疗效劣于和等于传统治疗方案的情况。</p><p>双尾检验得出的p值检验的假设是： <strong>对两种方案的疗效无主观判定</strong>，故假设是否新的治疗方案优于或劣于或等于传统治疗方案。</p><p><strong>因为在实际试验中，大多数情况下我们并不能知道两种方案疗效的优劣，我们需要探究的是新治疗方案是否优于或劣于或等于传统治疗方案，故我们应该选用双尾检验</strong>。尽管在此次小样本临床试验中，新治疗方案似乎比传统方案更优，但是我们也必须考虑新方案劣于传统方案的情况。好的统计检验意味着，我们必须在试验实施前确定检验方案和显著性水平。否则就会发生p-hacking，它会增加我们报告虚假结果的机会（bogus results）。</p><p><strong>故，在以上这种情况下，我们应该考虑采用双尾t检验，得出新方案与传统方案疗效无显著差异的结论</strong>（p值=0.06）。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>在大多数情况下，我们并不知道目标数据差异的方向和好坏， 因此<strong>我们既需要考虑一组数据高于另一组数据的情况，也需要考虑一组数据低于另一组数据的情况，故我们往往需要选取双尾检验以减少假阳性率。</strong></p><hr><p><strong>Reference</strong></p><p>https://www.youtube.com/watch?v=bsZGt-caXO4&amp;list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9&amp;index=30</p>',15),r=[s];function i(p,l){return e(),a("div",null,r)}const d=t(n,[["render",i],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/stats/tails/","title":"单尾还是双尾检验","lang":"zh-CN","frontmatter":{"title":"单尾还是双尾检验","author":"Jeason","createTime":"2020/08/10 15:37:12","permalink":"/stats/tails/","tags":["stats"],"description":"单尾检验与双尾检验 假设有一个新的肿瘤治疗方案，我们希望新治疗方案的疗效较传统治疗更好 **为了探究新的抗肿瘤治疗方案是否疗效更优，故进行含6个患者的小临床试验，其中3个患者接受传统治疗方案，另外3个患者接受新的治疗方案。**将治疗疗效结果表示在坐标轴上，从左至右表示疗效从好至差。该数据提示新治疗方案的疗效似乎更好，但是有部分数据并未得出此结论（如下）...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/stats/tails/"}],["meta",{"property":"og:title","content":"单尾还是双尾检验"}],["meta",{"property":"og:description","content":"单尾检验与双尾检验 假设有一个新的肿瘤治疗方案，我们希望新治疗方案的疗效较传统治疗更好 **为了探究新的抗肿瘤治疗方案是否疗效更优，故进行含6个患者的小临床试验，其中3个患者接受传统治疗方案，另外3个患者接受新的治疗方案。**将治疗疗效结果表示在坐标轴上，从左至右表示疗效从好至差。该数据提示新治疗方案的疗效似乎更好，但是有部分数据并未得出此结论（如下）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/one-tail/onetail1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T11:10:56.000Z"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:tag","content":"stats"}],["meta",{"property":"article:modified_time","content":"2024-05-13T11:10:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单尾还是双尾检验\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/one-tail/onetail1.jpg\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/one-tail/onetail2.jpg\\"],\\"dateModified\\":\\"2024-05-13T11:10:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[{"level":2,"title":"单尾检验与双尾检验","slug":"单尾检验与双尾检验","link":"#单尾检验与双尾检验","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"isBlogPost":true,"readingTime":{"minutes":2.43,"words":730},"git":{"updatedTime":1715598656000},"autoDesc":true,"filePathRelative":"stats/tails.md","categoryList":[{"type":10000,"name":"stats"}]}`);export{d as comp,g as data};
