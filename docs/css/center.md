# 实现水平垂直水平居中

## 垂直水平居中

#### 推荐方案：flex
```html
<div class="container">
    <div class="item">垂直水平居中</div>
</div>
```
```css
.container {
    display: flex;
    justity-content: center;
    align-items: center;
}
```

#### 绝对定位 + translate方案


#### 无视宽度水平居中
```html
<div class="item">无视宽度水平居中</div>
```
```css
.item {
    margin: 10px auto;
}
```
原理： 该缩写等价于
```css
.item {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}
```

#### 无视高度垂直居中

#### 固定高宽 margin 居中