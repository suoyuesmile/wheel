# HTML
语义化怎么写，标签之间的区别

- svg 画图
```html
<svg version="1.1" baseline-shift="full" width="400" height="400" 
    xmlns="http://www.w3.org/2000/svg">
    <circle id="circle" cx="200" cy="200" r="140" fill="white" />
    <clipPath id="clip">
        <use xlink:href="#circle"/>
    </clipPath>
    <circle cx="200" cy="200" r="200" fill="#54BF8E" />
    <circle cx="200" cy="200" r="148" fill="white" />
    <circle cx="200" cy="200" r="140" fill="rgba(240,250,252, 1)" />
    <g clip-path="url(#clip)">
        <rect transform="translate(230, 200)rotate(90)" 
            width="150" height="60" fill="#F1BC37" ></rect>
        <rect transform="translate(210, 160)rotate(-30)" 
            width="150" height="60" fill="#35ACE2" ></rect>
        <rect transform="translate(150, 200)rotate(-150)" 
            width="150" height="60" fill="#EF6535" ></rect>
    </g>
    <circle cx="200" cy="200" r="58" fill="white" />
    <circle cx="200" cy="200" r="50" fill="rgba(164,210,219, 0.9)" />
    <path name="三角形" fill="rgb(240,250,252)" d="M200 250 L157.5 175 L242.5 175Z"/>
    <g>
        <text font-size="26" font-weight="bold" fill="white" 
            x="144" y="76" transform="rotate(30)">HTML</text>
        <text font-size="26" font-weight="bold" fill="white" 
            x="146" y="282" transform="rotate(-30)">CSS</text>
        <text font-size="26" font-weight="bold" fill="white" 
            x="280" y="-194" transform="rotate(90)">JS</text>
    </g>
</svg>
```