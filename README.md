# 前端轮子集合
<div class="wheel">
    <div class="wheel__inner-border wheel-center wheel__border">
        <div class="wheel__html wheel__border--hair"></div>
        <div class="wheel__css wheel__border--hair"></div>
        <div class="wheel__js wheel__border--hair"></div>
        <div class="wheel__core wheel-center wheel__border"></div>
    </div>
</div>
<style>
    body {
        --outer-size: 200px;
        --inner-size: 140px;
        --core-size: 50px;
        --secondary-color: rgba(119, 176, 202, 0.8);
        --primary-color: #569BC6;
        --border-color: white;
    }

    @keyframes rotate {
        0%{
            transform: rotate(0);
        }
        25% {
            transform:rotate(270deg);
        }
        50%{
            transform: rotate(360);
        }
        100%{
            transform: rotate(0);
        }
    }

    .wheel {
        position: relative;
        /* box-shadow: ; */
        width: var(--outer-size);
        height: var(--outer-size);
        border-radius: 50%;
        background: var(--primary-color);
        /* transition: transform 1s linear; */
        animation: rotate 5s linear infinite;
    }
    .wheel-center {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    .wheel__border {
        border: 4px var(--border-color) solid;
    }
    .wheel__border--hair {
        border: 1px var(--border-color) solid;
    }
    .wheel__inner-border {
        position: relative;
        width: var(--inner-size);
        height: var(--inner-size);
        background: var(--secondary-color);
        overflow: hidden;
    }
    .wheel__core {
        position: absolute;
        width: var(--core-size);
        height: var(--core-size);
        background: var(--primary-color);
    }
    .wheel__html, .wheel__css, .wheel__js {
        position: absolute;
        background: var(--primary-color);
        width: calc(var(--inner-size) / 2);
        height: 20px;
        transform-origin: right;
        transform: translateY(-50%);
    }
    .wheel__js {
        top: 50%;
        left: calc(50%);
    }
    .wheel__html {
        right: 50%;
        top: calc(50% - 10px);
        transform: rotate(60deg);

    }
    .wheel__css {
        top: calc(50% - 10px);
        right: 50%;
        transform: rotate(-60deg);
    }
</style>

## 介绍

## 这是一个怎样的开源库？

## 为什么要造轮子？

## 怎样去造一个好的轮子？

## 避免重复造轮子

[JavaScript 开源轮子中心]()
[CSS 开源轮子中心]()
[Vue 开源轮子中心]()
[React 开源轮子中心]()
[打包工具 开源轮子中心]()
[项目 开源轮子中心]()

## 现在开始吧
### 已有轮子列表
### 计划要造的轮子
