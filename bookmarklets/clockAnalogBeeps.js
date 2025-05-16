javascript: (function () {
  if (window.analogClockBookmarklet) {
    clearInterval(window.analogClockBookmarklet.clockInterval);
    clearInterval(window.analogClockBookmarklet.fullscreenCheckInterval);
    window.analogClockBookmarklet.clock.remove();
    delete window.analogClockBookmarklet;
    alert("Clock removed");
    return;
  }

  var shouldAnnounce = confirm(
    "[Generating clock...] \n\nDo you want the clock to ALSO beep on every quarter hour? (every 15 minutes)"
  );

  var clock = document.createElement("div");
  clock.style.position = "fixed";
  clock.style.top = "10px";
  clock.style.left = "calc(100% - 122px)";
  clock.style.width = "112px";
  clock.style.height = "112px";
  clock.style.zIndex = "10000";
  clock.style.transition = "top 0.5s ease, left 0.5s ease";
  document.body.appendChild(clock);

  var svgNS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "110");
  svg.setAttribute("height", "110");
  clock.appendChild(svg);

  var face = document.createElementNS(svgNS, "circle");
  face.setAttribute("cx", "55");
  face.setAttribute("cy", "55");
  face.setAttribute("r", "50");
  face.setAttribute("fill", "white");
  face.setAttribute("stroke", "black");
  svg.appendChild(face);

  for (var i = 0; i < 12; i++) {
    var tick = document.createElementNS(svgNS, "line");
    tick.setAttribute(
      "x1",
      55 + Math.cos((i * Math.PI) / 6 - Math.PI / 2) * 40
    );
    tick.setAttribute(
      "y1",
      55 + Math.sin((i * Math.PI) / 6 - Math.PI / 2) * 40
    );
    tick.setAttribute(
      "x2",
      55 + Math.cos((i * Math.PI) / 6 - Math.PI / 2) * 47
    );
    tick.setAttribute(
      "y2",
      55 + Math.sin((i * Math.PI) / 6 - Math.PI / 2) * 47
    );
    tick.setAttribute("stroke", "black");
    tick.setAttribute("stroke-width", "2");
    svg.appendChild(tick);
  }

  var hourHand = document.createElementNS(svgNS, "line");
  hourHand.setAttribute("x1", "55");
  hourHand.setAttribute("y1", "55");
  hourHand.setAttribute("x2", "55");
  hourHand.setAttribute("y2", "35");
  hourHand.setAttribute("stroke", "black");
  hourHand.setAttribute("stroke-width", "4");
  hourHand.style.transformOrigin = "50% 50%";
  svg.appendChild(hourHand);

  var minuteHand = document.createElementNS(svgNS, "line");
  minuteHand.setAttribute("x1", "55");
  minuteHand.setAttribute("y1", "55");
  minuteHand.setAttribute("x2", "55");
  minuteHand.setAttribute("y2", "20");
  minuteHand.setAttribute("stroke", "black");
  minuteHand.setAttribute("stroke-width", "3");
  minuteHand.style.transformOrigin = "50% 50%";
  svg.appendChild(minuteHand);

  var secondHand = document.createElementNS(svgNS, "line");
  secondHand.setAttribute("x1", "55");
  secondHand.setAttribute("y1", "55");
  secondHand.setAttribute("x2", "55");
  secondHand.setAttribute("y2", "15");
  secondHand.setAttribute("stroke", "red");
  secondHand.setAttribute("stroke-width", "2");
  secondHand.style.transformOrigin = "50% 50%";
  svg.appendChild(secondHand);

  var lastAnnouncedMinute = -1;

  window.analogClockBookmarklet = {
    clock: clock,
    clockInterval: setInterval(updateClock, 1000),
    fullscreenCheckInterval: updateContainerIfFullScreen((container) => {
      if (!container.contains(clock)) container.appendChild(clock);
    }),
  };

  var positionTopRight = true;

  clock.addEventListener("mouseenter", function () {
    if (positionTopRight) {
      clock.style.top = "calc(100% - 122px)";
      clock.style.left = "10px";
    } else {
      clock.style.top = "10px";
      clock.style.left = "calc(100% - 122px)";
    }
    positionTopRight = !positionTopRight;
  });

  function updateClock() {
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours() % 12;

    var hourRotation = (hr + min / 60) * 30;
    var minuteRotation = (min + sec / 60) * 6;
    var secondRotation = sec * 6;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;

    if (shouldAnnounce) {
      announceQuarterHour(now);
    }
  }

  function announceQuarterHour(now) {
    var minutes = now.getMinutes();
    if (
      (minutes === 0 || minutes === 15 || minutes === 30 || minutes === 45) &&
      minutes !== lastAnnouncedMinute
    ) {
      lastAnnouncedMinute = minutes;
      beep();
    }
  }

  function beep() {
    const sound = new Audio(
      "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
    );
    sound.play();
  }

  function updateContainerIfFullScreen(
    callback,
    pollInterval = 1000,
    fallbackElement = document.body
  ) {
    return setInterval(() => {
      const fullscreenElement = document.querySelector(":fullscreen");
      if (fullscreenElement) {
        callback(fullscreenElement);
      } else {
        callback(fallbackElement);
      }
    }, pollInterval);
  }
})();
