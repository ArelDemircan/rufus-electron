const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  listDrives: () => ipcRenderer.invoke('drives:list'),
  chooseIso: () => ipcRenderer.invoke('iso:choose'),
  unmountDevice: (device) => ipcRenderer.invoke('device:unmount', device),
  flashIso: (payload) => ipcRenderer.invoke('iso:flash', payload),
  onProgress: (cb) => ipcRenderer.on('flash:progress', (_, data) => cb(data))
});
