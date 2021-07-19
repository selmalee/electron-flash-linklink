const getFlashPlugin = () => {
  if (process.platform === "win32") {
    if (process.arch === "x64") {
      return {
        pluginPath: "pepflashplayer64_34_0_0_164.dll",
        version: "34.0.0.164",
      };
    }

    return {
      pluginPath: "pepflashplayer32_32_0_0_363.dll",
      version: "32.0.0.363",
    };
  }

  if (process.platform === "darwin") {
    return {
      pluginPath: "PepperFlashPlayer.plugin",
      version: "30.0.0.127",
    };
  }

  return null;
};

module.exports = {
  getFlashPlugin
};
