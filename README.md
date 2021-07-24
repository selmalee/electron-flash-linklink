# 命令
开发模式
``` bash
npm start
```

使用 Forge 的 `make` 命令来创建可分发的应用程序。运行结果在`out`目录下
``` bash
npm run make
```

# 注意事项
 - chrome从v88后，彻底地禁止使用flash。所以项目中的`electron`版本为`^11.4.7`。
 - 可以在`electron/assets`下替换你本机的pepeflashplayer插件。