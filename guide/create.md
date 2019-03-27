# 创建项目

> 执行此节之前，请确保`必须的环境`全都安装完成。

## 生成开发模板 

使用 weiui-cli 的 create 命令来创建模版工程：

```bash
weiui create <AppName>
```

脚手架会自动从 github 上拉取最新的 [weiui-template 开发模板](https://github.com/kuaifan/weiui-template)

然后进入开发目录，执行 `npm i` 加载`node_modules`

```bash
cd <AppName>
npm i
npm run dev
```

## iOS 运行项目

确保您已经安装完成 [iOS 所需环境](/start/env)。

`cd`到iOS工程目录`platforms/ios/WeexWeiui` 执行`pod install`命令来拉取iOS工程的依赖

```bash
pod install
```

首次执行时间会稍长，命令执行完毕后找到当前目录下 `WeexWeiui.xcworkspace` 文件，双击即可唤起XCode打开 iOS 工程；

然后在XCode选择相应的模拟器（比如iPhone 8），点击`▶`按钮来运行项目。


## Android 运行项目

确保您已经安装完成 [Android 所需环境](/start/env)。

1.打开`AndroidStudio`软件然后`Open`Android工程目录`platforms/android/WeexWeiui`。
2.待项目构建完成，点击 AndroidStudio 上方工具栏的 `Run`，即可运行项目。

> 第一次打开 AndroidStuido 时，由于本地环境未配置好，AndroidStuido 会提示错误，按照 IDE 提示，点击 `sync` 同步一下，大部分环境问题都可以解决。

注：

* 可能您第一次构建的时间太长您也可以尝试[解决 Android Studio 第一次导入项目太慢](https://www.jianshu.com/p/ba8189146a6b)。实在不行就请耐心等待 Android Studio 自己构建完成吧


## 模板目录结构

```bash
├── config                  // webpack相关配置
├── dist                    // 静态资源生成目录
├── node_modules            // 依赖
├── plugins                 // 平台插件程序
├── platforms               // 平台基础代码
│   ├── android
│   └── ios
├── src                     // 开发路径
├── statics                 // 静态资源
├── web                     // vue访问目录
├── weiui.config.js         // 客户端相关配置
└── package.json            // npm 项目及依赖说明
```

首次打开我们已经为您内置了由一些 `demo`，您可以看到相关的页面，下面在开发之前还需要进行一些相关的配置和调试的学习。

