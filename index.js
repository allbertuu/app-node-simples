const os = require("os");

const { arch, platform, totalmem, freemem } = os;

const bytesToMegabytes = (bytes) => bytes / 1024 / 1024;

const tRAM = bytesToMegabytes(totalmem());
const fRAM = bytesToMegabytes(freemem());
const usageRAM = ((tRAM - fRAM) / tRAM) * 100;

setInterval(() => {
  const stats = {
    os: platform(),
    arch: arch(),
    totalRAM: `${parseInt(tRAM)} MB`,
    freeRAM: `${parseInt(fRAM)} MB`,
    usageRAM: `${usageRAM.toFixed(2)}%`,
  };

  // console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);
