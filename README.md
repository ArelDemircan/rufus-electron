# ⚡ rufus-electron

[![Made with Electron](https://img.shields.io/badge/Made%20with-Electron-blue.svg)](https://www.electronjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Cross Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-orange.svg)](#)
[![Built by Arel Demircan](https://img.shields.io/badge/Built%20by-Arel%20Demircan-lightgrey.svg)](https://github.com/ArelDemircan)

---

**rufus-electron** is a cross-platform, open-source ISO-to-USB flasher built with [Electron](https://www.electronjs.org/).  
It’s a modern alternative to **Rufus**, featuring a clean UI and full compatibility with Windows, macOS, and Linux.

---

## 🖼️ Preview

<p align="center">
  <img src="./assets/screenshot.png" alt="rufus-electron Screenshot" width="700">
</p>

*(Replace this image with your actual app screenshot.)*

---

## ✨ Features

- Write `.iso` or `.img` files directly to USB drives  
- Works on **Windows / macOS / Linux**  
- Auto-detects removable drives  
- Safely unmounts before writing  
- Displays progress in real time  
- Uses admin privileges only when required  

---

## 📦 Installation

### 1️⃣ Clone or download
```bash
git clone https://github.com/ArelDemircan/rufus-electron.git
cd rufus-electron
2️⃣ Install dependencies
npm install
3️⃣ Start the app
npm start
💡 Tip: On macOS/Linux you can also run:
npx electron .
🔥 How to Flash an ISO
Click Select ISO to choose your image
Choose your target USB drive
Press FLASH
Wait until the progress bar reaches 100%
“Done!” will appear when flashing completes 🎉
🪟 Windows Elevated Writing
Windows uses a PowerShell helper for privileged writes:
utils/windows-write.ps1
It performs safe, raw block-level access — compatible with FAT32, NTFS, and other formats.
🧰 Building Packages
Use electron-builder to create native installers.
🪟 Windows (.exe)
npm run dist
🍎 macOS (.dmg)
npm run dist -- --mac
🐧 Linux (.AppImage)
npm run dist -- --linux
⚠️ Important Warning
This app performs low-level disk writes.
⚠️ Selecting the wrong disk will erase all data.
Always double-check your target drive before flashing.
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
Electron, disk management, and cross-platform app development.
🧩 Planned Features
✅ ISO checksum verification (SHA256 / MD5)
✅ FAT32/NTFS formatting options
🌙 Dark theme
🌐 Multi-language support (EN/TR)
🧩 UEFI / Legacy detection
📊 Log file output
💬 Community & Support
⭐ Enjoy this project?
Give it a star on GitHub!
🍴 Want to contribute?
Fork the repo, make your improvements, and submit a pull request!

🐞 Found a bug?
Open an issue — feedback is always welcome.

🪪 License
Licensed under the MIT License © 2025 Arel Demircan.
You’re free to use, modify, and distribute this software.
<p align="center"> <sub>Made with ❤️ by <a href="https://github.com/ArelDemircan">Arel Demircan</a> • Built using Electron</sub> </p> ``
