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
        logo: "https://suoyuesmile.github.io/wheel/images/icon2.png",
        repo: "suoyuesmile/wheel",
        sidebar: {
            "/basic": [
                {
                    isGroup: true,
                    text: "JavaScript 实现",
                    children: [
                        "ajax.md",
                        "axios.md",
                        "call.md",
                        "copy-deep.md",
                        "currying.md",
                        "extend.md",
                        "instanceof.md",
                        "objectcreate.md",
                        "promise.md",
                        "sleep.md",
                        "apply.md",
                        "bind.md",
                        "class.md",
                        "copy-shadow.md",
                        "debounce.md",
                        "flat.md",
                        "new.md",
                        "pipe.md",
                        "reduce.md",
                    ],
                },
                {
                    isGroup: true,
                    text: "CSS 实现",
                    children: ["换肤"],
                },
            ],
        },
        locales: {
            "/": {
                selectLanguageName: "简体中文",
                selectText: "Languages",
                editLinkText: "Edit this page on GitHub",
                navbar: [
                    {
                        text: "HTML + CSS + JavaScript",
                        link: "/basic/",
                    },
                    {
                        text: "前端框架",
                        link: "/framework",
                    },
                    {
                        text: "Mini框架",
                        link: "/framework",
                    },
                    {
                        text: "基础组件",
                        link: "/Component",
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
