# 配置相关

> 整个项目中，只有一个主要配置文件，就放在项目根目录下。

## 配置文件

> `weiui.config.js` 为客户端配置文件

- 注意:  **`weiui.config.js` 每次变动，都需要重新执行命令 `npm run serve` 并在IDE重新编译运行你的 app。**

```javascript
{
    homePage: "",   //主页的JS地址

    rongim: {       //融云模块配置
        enabled: false,
        appKey: "",
        appSecret: "",
    },

    umeng: {        //友盟模块配置
        enabled: false,
        appKey: "",
        appSecret: "",
        channel: "",
    },
}
```
## 配置说明

###### **`homePage`**: 主页的JS地址
- 一般情况下自动生成。
- 只有当项目把JS资源放到服务器上时需要把JS路径填写此项目。

###### **`rongim`**: 融云相关配置（即时通讯模块）
- enabled: 是否启用融云服务。
- appKey、appSecret: 在融云平台申请。

###### **`umeng`**: 友盟相关配置（推送、统计模块）
- enabled: 是否启用友盟服务。
- appKey、appSecret: 在友盟平台申请。
- channel: 友盟统计渠道。

