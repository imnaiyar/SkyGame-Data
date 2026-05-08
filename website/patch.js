// patch-network.js
const os = require('os');
const _orig = os.networkInterfaces;
console.log("Patching NodeOS");

os.networkInterfaces = function () {
  try {
    return _orig.call(os);
  } catch (e) {
    return {}; // return empty object on proot/Termux
  }
};
