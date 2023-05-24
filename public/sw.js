const { useEffect } = require("react");

useEffect(() => {
  if ("serviceWOrker" in navigator) {
    const registInit = async () => {
      const registration = await navigator.serviceWorker.register("/sw.js");
      registration.waiting?.postMessage("SKIP_WAITING");
    };
    registInit();
  }
}, []);
