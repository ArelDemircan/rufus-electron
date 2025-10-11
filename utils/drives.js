const drivelist = require('drivelist');

async function listDrives() {
  const drives = await drivelist.list();
  return drives.map(d => ({
    device: d.device,
    description: d.description,
    size: d.size,
    mountpoints: d.mountpoints,
    isRemovable: d.isRemovable,
    isSystem: d.isSystem
  }));
}

module.exports = { listDrives };
