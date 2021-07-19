const { BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    webPreferences: {
      plugins: true,
      // preload: path.join(__dirname, 'preload.js'),
    }
  });

  // win.loadURL('file://' + path.join(__dirname, './assets/game.swf'));
  win.loadFile('index.html');
  const contents = win.webContents;
  contents.on("did-finish-load", () => {
    contents.insertCSS("html, body { height: 100vh; width: 100vw; }");
  });
}

module.exports = createWindow;
