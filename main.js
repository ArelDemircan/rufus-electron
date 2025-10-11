const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { listDrives } = require('./utils/drives');
const { writeIsoToDevice } = require('./utils/writer');
const { unmountDevice } = require('./utils/unmount');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('drives:list', async () => listDrives());
ipcMain.handle('iso:choose', async () => {
  const res = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'ISO Files', extensions: ['iso', 'img'] }]
  });
  if (res.canceled) return null;
  return res.filePaths[0];
});

ipcMain.handle('device:unmount', async (e, device) => unmountDevice(device));
ipcMain.handle('iso:flash', async (event, { isoPath, device }) => {
  const result = await writeIsoToDevice({
    isoPath,
    device,
    onProgress: (prog) => event.sender.send('flash:progress', prog)
  });
  return result;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
