# 介绍
因为flash的安全性等问题，很多浏览器都不再支持flash。因此，在 Electron 里，使用 Pepper Flash 插件加载钟爱的flash小游戏，以供随时娱乐^ ^。

注意：
 - 版本：chromium从v88后，彻底地禁止使用flash。项目中的`electron`版本为`^11.4.7`，chromium版本为`87.0.4280.141`。
 - 自定义插件：可以在`electron/assets`下替换你本机的pepeflashplayer插件。
 - 测试：在win10加载成功。macOS Big Sur版本11.3.1加载插件失败。

# 命令
开发模式
``` bash
npm start
```

使用 Forge 的 `make` 命令来创建可分发的应用程序。运行结果在`out`目录下
``` bash
npm run make
```
