const { exec } = require('child_process');

function unmountDevice(device) {
  return new Promise((resolve) => {
    if (process.platform === 'darwin') {
      exec(`diskutil unmountDisk ${device}`, (err, out) =>
        resolve({ success: !err, message: out || err?.message })
      );
    } else if (process.platform === 'linux') {
      exec(`sudo umount ${device}* || true`, (err, out) =>
        resolve({ success: !err, message: out || err?.message })
      );
    } else {
      resolve({ success: true, message: 'Windows otomatik olarak unmount eder.' });
    }
  });
}

module.exports = { unmountDevice };
