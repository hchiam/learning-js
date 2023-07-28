javascript: (async () => {
  console.log(
    "https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper#browser_compatibility"
  );
  console.log("https://developer.chrome.com/articles/eyedropper/");
  alert(await sampleColorFromScreen());
  async function sampleColorFromScreen(
    abortController = new AbortController()
  ) {
    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open({ signal: abortController.signal });
      return result.sRGBHex;
    } catch (e) {
      return null;
    }
  }
})();
