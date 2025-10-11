const fs = require('fs');
const progress = require('progress-stream');
const sudo = require('sudo-prompt');
const path = require('path');

function writeIsoToDevice({ isoPath, device, onProgress }) {
  return new Promise((resolve, reject) => {
    try {
      const stat = fs.statSync(isoPath);
      const total = stat.size;
      const read = fs.createReadStream(isoPath, { highWaterMark: 4 * 1024 * 1024 });
      const write = fs.createWriteStream(device, { flags: 'w' });
      const p = progress({ length: total, time: 500 });
      p.on('progress', prog => onProgress && onProgress(prog));
      read.pipe(p).pipe(write);
      write.on('finish', () => resolve({ success: true }));
      read.on('error', reject);
      write.on('error', reject);
    } catch (err) {
      // Permission hatası → sudo ile dene
      const cmd = process.platform === 'win32'
        ? `powershell -ExecutionPolicy Bypass -File "${path.join(__dirname, 'windows-write.ps1')}" -IsoPath "${isoPath}" -DevicePath "${device}"`
        : `dd if="${isoPath}" of=${device} bs=4M status=progress conv=fsync`;
      sudo.exec(cmd, { name: 'rufus-electron' }, (err, out, errOut) => {
        if (err) reject(err);
        else resolve({ success: true, output: out || errOut });
      });
    }
  });
}

module.exports = { writeIsoToDevice };
