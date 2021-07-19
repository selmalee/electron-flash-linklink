const { app, BrowserWindow } = require('electron');
const path = require('path');
const { getFlashPlugin } = require('./plugins'); 
const createWindow = require('./window'); 

// 获得系统里面flash插件的位置
const flashPlugin = getFlashPlugin();
let flashFlag = false;
if (flashPlugin) {
  const { pluginPath, version } = flashPlugin;
  app.commandLine.appendSwitch("ppapi-flash-path", path.join(__dirname, 'assets', pluginPath));
  app.commandLine.appendSwitch("ppapi-flash-version", version);
  flashFlag = true;
}

app.whenReady().then(() => {
  if (!flashFlag) {
    console.error('get flash plugin error');
  }
  console.log('chrome version: ', process.versions.chrome); //  Chromium v88 以上版本（包含 v88）内核的浏览器不再支持 Flash
  createWindow();
});

// 如果没有窗口打开则打开一个窗口 (macOS)
app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
});

// 关闭所有窗口时退出应用-windows--linux
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
