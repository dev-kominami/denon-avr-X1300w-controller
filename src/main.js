const {app, BrowserWindow} = require('electron');

// main window
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 250,
    hight: 600,
  });

  //main window url
  mainWindow.loadFile('index.html');

  // developer tool load
  mainWindow.webContents.openDevTools();

  // main window close action
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

// init ready action
app.on('ready', createWindow);

// all window closed action
app.on('window-all-closed', () => {
  //Application close when other than macOS;
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

// Application action when activate
app.on('activate', () => {
  // create Main Window again when Main Window disappeared
  if(mainWindow === null) {
    createWindow();
  }
});