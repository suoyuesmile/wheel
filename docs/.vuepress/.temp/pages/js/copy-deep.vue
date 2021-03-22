<template><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">__copy_deep</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> origin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> origin<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> origin<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">__copy_deep</span><span class="token punctuation">(</span>origin<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> origin<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// test</span>
<span class="token keyword">var</span> schoolObj <span class="token operator">=</span> <span class="token punctuation">{</span>
    middle<span class="token operator">:</span> <span class="token string">'first middle school'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> workArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'ym'</span><span class="token punctuation">,</span> <span class="token string">'cfy'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token punctuation">{</span>
        first<span class="token operator">:</span> <span class="token string">'shao'</span><span class="token punctuation">,</span>
        last<span class="token operator">:</span> <span class="token string">'suo'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    school<span class="token operator">:</span> schoolObj<span class="token punctuation">,</span>
    work<span class="token operator">:</span> workArr<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> copyObj <span class="token operator">=</span> <span class="token function">__copy_deep</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copyObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></template>