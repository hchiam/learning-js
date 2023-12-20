var referenceTime = new Date();
setTimeout(() => {
  const nowTime = new Date();
  const formattedTimeAgoString = new Intl.RelativeTimeFormat(
    navigator.language
  ).format(Math.round(referenceTime - nowTime), "seconds");
  console.log(formattedTimeAgoString);
  // 1,000 seconds ago
}, 1000);
