# ⚡ rufus-electron

[![Made with Electron](https://img.shields.io/badge/Made%20with-Electron-blue.svg)](https://www.electronjs.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Cross Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-orange.svg)](#)
[![Built by Arel Demircan](https://img.shields.io/badge/built%20by-Arel%20Demircan-lightgrey.svg)](#)

---

**rufus-electron** is a cross-platform, open-source ISO-to-USB flasher built with [Electron](https://www.electronjs.org/).  
It’s designed as a modern alternative to **Rufus**, with a clean UI and full support for Windows, macOS, and Linux.

---

## 🖼️ Preview

<p align="center">
  <img src="./assets/screenshot.png" alt="rufus-electron Screenshot" width="700">
</p>

*(You can replace this image with your actual app screenshot.)*

---

## ✨ Features

- Write `.iso` or `.img` files directly to USB drives  
- Works on **Windows / macOS / Linux**  
- Auto-detects removable drives  
- Unmounts safely before flashing  
- Progress bar and real-time feedback  
- Requires administrator privileges only when needed  

---

## 📦 Installation

### 1️⃣ Clone or download the repository
```bash
git clone https://github.com/yourname/rufus-electron.git
cd rufus-electron
2️⃣ Install dependencies
npm install
3️⃣ Start the app
npm start
💡 Tip: On macOS and Linux, you can also run:
npx electron .
🔥 How to Flash an ISO
Click Select ISO to choose your image
Choose the target USB drive
Click FLASH
Wait until the progress bar reaches 100%
“Done!” will appear when flashing completes 🎉
🪟 Windows Elevated Writing
On Windows, privileged writes are handled through a PowerShell helper:
utils/windows-write.ps1
This script enables raw block-level writing with proper permissions,
working across FAT32, NTFS, and other file systems.
🧰 Packaging the App
You can build native installers with electron-builder.
🪟 Windows (.exe)
npm run dist
Output is saved to dist/.
🍎 macOS (.dmg)
npm run dist -- --mac
🐧 Linux (.AppImage)
npm run dist -- --linux
⚠️ Important Warning
This app performs low-level disk writes.
⚠️ Selecting the wrong drive will erase all data.
Please verify the target drive before flashing.
📁 Project Structure
rufus-electron/
├─ package.json
├─ main.js
├─ preload.js
├─ index.html
├─ renderer.js
└─ utils/
   ├─ drives.js
   ├─ unmount.js
   ├─ writer.js
   └─ windows-write.ps1
👨‍💻 Developer
Created by Arel Demircan
Goal: Build a free, modern alternative to Rufus while exploring
Electron, system-level disk operations, and cross-platform development.
🧩 Planned Features
✅ ISO checksum verification (SHA256 / MD5)
✅ FAT32/NTFS formatting options
🌙 Dark theme support
🌐 Multi-language (English / Turkish)
🧩 UEFI / Legacy detection
📊 Log file output
🪪 License
Released under the MIT License.
Feel free to use, modify, and distribute this project.
<p align="center"> <sub>Made with ❤️ by Arel Demircan • Built using Electron</sub> </p> ```