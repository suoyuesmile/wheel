<template><h1 id="美国数据加密标准des"><a class="header-anchor" href="#美国数据加密标准des">#</a> 美国数据加密标准DES</h1>
<p>DES、RSA、SHA、AES、ECC</p>
<p>目的</p>
<ul>
<li>保密性</li>
<li>数据完整性</li>
<li>身份校验</li>
</ul>
<p>分类</p>
<ul>
<li>对称加密
DES 同一个密钥， Session Key</li>
</ul>
<p>DSA 数字签名</p>
<p>AES 高级加密标准，对称算法 128/256</p>
<ul>
<li>非对称加密
加密解密使用不同的密钥
公钥（对外公布）和私钥（不对外公布）</li>
</ul>
<p>S={P, C, K, E, D}</p>
<p>RSA 数论非对称性(公开钥)加密算法</p>
<p>常采用传统加密方法与公开密钥加密方法相结合的方式，即信息采用改进的DES或IDEA对话密钥加密
然后使用RSA密钥加密对话密钥和信息摘要</p>
<p>MD5 512位分组来处理输入的信息 128位散列值</p>
</template>