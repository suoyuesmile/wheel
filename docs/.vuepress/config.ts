import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
    base: "/wheel/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "前端轮子",
            description: "Just playing around",
        },
        "/en/": {
            lang: "en-US",
            title: "VuePress",
            description: "Vue 驱动的静态网站生成器",
        },
    },
    themeConfig: {
        logo: "https://suoyuesmile.github.io/wheel/images/icon.svg",
        repo: "suoyuesmile/wheel",
        sidebar: {
            "/css": [
                {
                    isGroup: true,
                    text: "CSS 常用布局",
                    children: [
                        {
                            text: "垂直水平居中",
                            link: "center.md",
                        },
                        {
                            text: "两栏布局",
                            link: "tow-col",
                        },
                        {
                            text: "三栏布局",
                            link: "three-col",
                        },
                        {
                            text: "横排",
                            link: "three-col",
                        },
                        {
                            text: "宫格",
                            link: "grid",
                        },
                        {
                            text: "缩放",
                            link: "flexbox",
                        },
                        {
                            text: "屏幕固定",
                            link: "fixed",
                        },
                    ],
                },
                {
                    isGroup: true,
                    text: "CSS 多边形",
                    children: [
                        {
                            text: "圆形",
                            link: "circle",
                        },
                        {
                            text: "梯形",
                            link: "tow-col",
                        },
                        {
                            text: "三角形",
                            link: "three-col",
                        },
                        {
                            text: "锯齿形",
                            link: "three-col",
                        },
                    ],
                },
                {
                    isGroup: true,
                    text: "CSS 动画",
                    children: [
                        {
                            text: "淡入淡出",
                            link: "center",
                        },
                        {
                            text: "平移",
                            link: "tow-col",
                        },
                        {
                            text: "旋转",
                            link: "three-col",
                        },
                    ],
                },
                {
                    isGroup: true,
                    text: "CSS 响应式",
                    children: [
                        {
                            text: "rem",
                            link: "center",
                        },
                        {
                            text: "vw",
                            link: "tow-col",
                        },
                        {
                            text: "hairline(1px细线)",
                            link: "three-col",
                        },
                    ],
                },
                {
                    isGroup: true,
                    text: "CSS 规范",
                    children: [
                        {
                            text: "bem",
                            link: "center",
                        },
                        {
                            text: "避免全局污染",
                            link: "tow-col",
                        },
                    ],
                },
            ],
            "/js": [
                {
                    isGroup: true,
                    text: "实现API",
                    children: [
                        {
                            text: "apply",
                            link: "apply.md",
                        },
                        {
                            text: "call",
                            link: "call.md",
                        },
                        {
                            text: "bind",
                            link: "bind.md",
                        },
                        {
                            text: "class",
                            link: "class.md",
                        },
                        {
                            text: "extend",
                            link: "extend.md",
                        },
                        {
                            text: "new",
                            link: "new.md",
                        },
                        // {
                        //     text: "object create",
                        //     link: "objectcreate.md",
                        // },
                        {
                            text: "instance of",
                            link: "instanceof.md",
                        },
                        {
                            text: "promise",
                            link: "promise.md",
                        },
                        {
                            text: "sleep",
                            link: "sleep.md",
                        },
                        {
                            text: "reduce",
                            link: "reduce.md",
                        },
                    ],
                },
                {
                    isGroup: true,
                    text: "常用实现",
                    children: [
                        {
                            text: "浅拷贝",
                            link: "copy-shadow.md",
                        },
                        {
                            text: "深拷贝",
                            link: "copy-deep.md",
                        },
                        {
                            text: "防抖",
                            link: "debounce.md",
                        },
                        {
                            text: "节流",
                            link: "debounce.md",
                        },
                        {
                            text: "数组扁平化",
                            link: "flat.md",
                        },
                        {
                            text: "柯里化",
                            link: "currying.md",
                        },
                    ],
                },
                {
                    isGroup: true,
                    text: "请求封装",
                    children: [
                        {
                            text: "ajax",
                            link: "ajax.md",
                        },

                        {
                            text: "axios",
                            link: "axios.md",
                        },

                        {
                            text: "封装api",
                            link: "api.md",
                        },
                    ],
                },
            ],
            "/framework": [
                {
                    isGroup: true,
                    text: "工程化",
                    children: [ 
                        {
                            text: '热更新',
                            link: 'hmr.md'
                        } 
                    ]
                },
            ],
        },
        locales: {
            "/": {
                selectLanguageName: "简体中文",
                selectText: "Languages",
                editLinkText: "在GitHub上编辑",
                navbar: [
                    {
                        text: "JavaScript",
                        link: "/js/",
                    },
                    {
                        text: "CSS",
                        link: "/css/",
                    },
                    {
                        text: "HTML",
                        link: "/html/",
                    },
                    {
                        text: "前端框架",
                        link: "/framework/",
                    },
                    {
                        text: "Mini框架",
                        link: "/framework-mini/",
                    },
                    {
                        text: "基础组件",
                        link: "/component/",
                    },
                    // {
                    //     text: "Leetcode",
                    //     link: "/Leetcode",
                    // },
                ],
            },
        },
    },
});
