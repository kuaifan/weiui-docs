let sidebar = {
    guide() {
        return [{
            title: '起步',
            collapsable: false,
            children: [
                '/guide/introduce',
                '/guide/env',
                '/guide/create',
                '/guide/config',
                '/guide/debug',
                '/guide/lifecycle',
            ]
        }, {
            title: '样式',
            collapsable: false,
            children: [
                ['/weex/styles/common-styles', '通用样式'],
                ['/weex/styles/text-styles', '文本样式'],
                ['/weex/styles/css-units', 'CSS 单位'],
                ['/weex/styles/color-name', '颜色值']
            ]
        }, {
            title: '事件',
            collapsable: false,
            children: [
                ['/weex/events/common-events', '通用事件'],
                ['/weex/events/event-bubbling', '事件冒泡'],
                ['/weex/events/gesture', '手势']
            ]
        }];
    },
    component() {
        return [{
            title: '组件',
            collapsable: false,
            children: [
                ['/component/banner', '<banner>'],
                ['/component/button', '<button>'],
                ['/component/grid', '<grid>'],
                ['/component/icon', '<icon>'],
                ['/component/marquee', '<marquee>'],
                ['/component/navbar', '<navbar>'],
                ['/component/navbar-item', '<navbar-item>'],
                ['/component/ripple', '<ripple>'],
                ['/component/scroll-text', '<scroll-text>'],
                ['/component/scroll-view', '<scroll-view>'],
                ['/component/side-panel', '<side-panel>'],
                ['/component/side-panel-menu', '<side-panel-menu>'],
                ['/component/tabbar', '<tabbar>'],
                ['/component/tabbar-page', '<tabbar-page>'],
                ['/component/web-view', '<web-view>'],
            ]
        }, {
            title: 'weex组件',
            collapsable: false,
            children: [
                ['/weex/components/a', '<a>'],
                ['/weex/components/div', '<div>'],
                ['/weex/components/text', '<text>'],
                ['/weex/components/image', '<image>'],
                ['/weex/components/list', '<list>'],
                ['/weex/components/cell', '<cell>'],
                ['/weex/components/loading', '<loading>'],
                ['/weex/components/refresh', '<refresh>'],
                ['/weex/components/recycle-list', '<recycle-list>'],
                ['/weex/components/scroller', '<scroller>'],
                ['/weex/components/slider', '<slider>'],
                ['/weex/components/indicator', '<indicator>'],
                ['/weex/components/textarea', '<textarea>'],
                ['/weex/components/input', '<input>'],
                ['/weex/components/waterfall', '<waterfall>'],
                ['/weex/components/video', '<video>'],
                ['/weex/components/web', '<web>'],
                ['/weex/components/richtext', '<richtext>']
            ]
        }];
    },
    modules() {
        return [{
            title: '模块',
            collapsable: false,
            children: [
                ['/module/adDialog', 'adDialog'],
                ['/module/ajax', 'ajax'],
                ['/module/alert', 'alert'],
                ['/module/caches', 'caches'],
                ['/module/captcha', 'captcha'],
                ['/module/loading', 'loading'],
                ['/module/navigationBar', 'navigationBar'],
                ['/module/navigator', 'navigator'],
                ['/module/newPage', 'newPage'],
                ['/module/openOtherApp', 'openOtherApp'],
                ['/module/plate', 'plate'],
                ['/module/saveImage', 'saveImage'],
                ['/module/scaner', 'scaner'],
                ['/module/share', 'share'],
                ['/module/storage', 'storage'],
                ['/module/system', 'system'],
                ['/module/toast', 'toast'],
                ['/module/keyboard', 'keyboard'],
            ]
        }, {
            title: 'weex模块',
            collapsable: false,
            children: [
                ['/weex/modules/animation', 'animation'],
                ['/weex/modules/clipboard', 'clipboard'],
                ['/weex/modules/dom', 'dom'],
                ['/weex/modules/globalEvent', 'globalEvent'],
                ['/weex/modules/meta', 'meta'],
                ['/weex/modules/modal', 'modal'],
                // ['/weex/modules/navigator', 'navigator'],
                ['/weex/modules/picker', 'picker'],
                ['/weex/modules/storage', 'storage'],
                ['/weex/modules/stream', 'stream'],
                ['/weex/modules/webview', 'webview'],
                // ['/weex/modules/websockets', 'webSockets']
            ]
        }]
    },
    plugin() {
        return [{
            title: '插件化',
            collapsable: false,
            children: [
                ['/plugin/citypicker', '城市选择'],
                ['/plugin/picture', '图片选择'],
                ['/plugin/screenshots', '组件截图'],
                ['/plugin/rongim', '融云模块'],
                ['/plugin/umeng', '友盟模块'],
                ['/plugin/pay', '支付模块'],
                ['/plugin/websocket', 'websocket'],
                ['/plugin/audio', '音频播放'],
            ]
        }, {
            title: '开发插件',
            collapsable: false,
            children: [
                ['/plugin/dev/create', '创建插件'],
                ['/plugin/dev/android', 'Android插件'],
                ['/plugin/dev/ios', 'iOS插件'],
                ['/plugin/dev/publish', '发布插件'],
            ]
        }];
    }
};

module.exports = {
    title: 'WEIUI',
    description: '一个基于 Vue.js 的高质量跨平台开发框架。',

    themeConfig: {
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        docsRepo: 'kuaifan/weiui-docs',
        lastUpdated: '最后一次更新',
        logo: '/logo.png',

        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/', actives: ['/weex/styles/', '/weex/events/']},
            {text: '组件', link: '/component/', actives: ['/weex/components/']},
            {text: '模块', link: '/module/', actives: ['/weex/modules/']},
            {text: '插件化', link: '/plugin/'},
            {text: 'APP管理', link: 'https://console.weiui.app/'},
            {text: 'GitHub', link: 'https://github.com/kuaifan/weiui'},
        ],

        sidebar: {
            '/guide/': sidebar.guide(),
            '/weex/styles/': sidebar.guide(),
            '/weex/events/': sidebar.guide(),

            '/component/': sidebar.component(),
            '/weex/components/': sidebar.component(),

            '/module/': sidebar.modules(),
            '/weex/modules/': sidebar.modules(),

            '/plugin/': sidebar.plugin(),
        },
        sidebarDepth: 1,
    }
};
