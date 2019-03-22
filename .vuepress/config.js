module.exports = {
    title: 'WEIUI',
    description: '一个基于 Vue.js 的高质量跨平台开发框架。',

    themeConfig: {
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        docsRepo: 'kuaifan/weiui-docs',
        lastUpdated: 'Last Updated',

        logo: '/logo.png',
        nav: [
            {text: '首页', link: '/?_=' + (Math.random() + "").substr(2)},
            {text: '起步', link: '/guide/'},
            {text: '组件', link: '/component/'},
            {text: '模块', link: '/module/'},
            {text: '插件化', link: '/plugin/'},
            {text: 'APP管理', link: 'https://app.weiui.cc/'},
            {text: 'GitHub', link: 'https://github.com/kuaifan/weiui'},
        ],

        sidebar: {
            '/guide/': [{
                title: '起步',
                collapsable: false,
                children: [
                    'introduce',
                    'env',
                    'create',
                    'config',
                    'debug',
                    'lifecycle',
                ]
            }],
            '/component/': [{
                title: '组件',
                collapsable: false,
                children: [
                    'banner',         //weiui_banner
                    'button',         //weiui_button
                    'grid',           //weiui_grid
                    'icon',           //weiui_icon
                    'marquee',        //weiui_marquee
                    'navbar',         //weiui_navbar
                    'navbar-item',    //weiui_navbar_item
                    'ripple',         //weiui_ripple
                    'scroll-text',    //weiui_scroll_text
                    'scroll-view',    //weiui_list
                    'side-panel',     //weiui_side_panel
                    'side-panel-menu',//weiui_side_panel_item
                    'tabbar',         //weiui_tabbar
                    'tabbar-page',    //weiui_tabbar_page
                    'web-view',       //weiui_webview
                ]
            }],
            '/module/': [{
                title: '模块',
                collapsable: false,
                children: [
                    'adDialog',
                    'ajax',
                    'alert',
                    'caches',
                    'captcha',
                    'loading',
                    'navigationBar',
                    'navigator',
                    'newPage',
                    'openOtherApp',
                    'plate',
                    'saveImage',
                    'scaner',
                    'share',
                    'storage',
                    'system',
                    'toast',
                    'keyboard',
                ]
            }],
            '/plugin/': [{
                title: '插件化',
                collapsable: false,
                children: [
                    'citypicker',
                    'picture',
                    'screenshots',
                    'rongim',
                    'umeng',
                    'pay',
                    'websocket',
                ]
            }, {
                title: '开发插件',
                collapsable: false,
                children: [
                    'dev/create',
                    'dev/android',
                    'dev/ios',
                    'dev/publish',
                ]
            }]
        },
        sidebarDepth: 1,
    }
};
