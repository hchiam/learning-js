javascript: (function () {
    if (window.analogClockBookmarklet) {
        clearInterval(window.analogClockBookmarklet.clockInterval);
        clearInterval(window.analogClockBookmarklet.fullscreenCheckInterval);
        window.analogClockBookmarklet.clock.remove();
        delete window.analogClockBookmarklet;
        alert("Clock removed");
        return;
    }

    var shouldAnnounce = confirm("[Generating clock...] \n\nDo you want the clock to ALSO announce the time every quarter hour? (every 15 minutes)");

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
        tick.setAttribute("x1", 55 + Math.cos(i * Math.PI / 6 - Math.PI / 2) * 40);
        tick.setAttribute("y1", 55 + Math.sin(i * Math.PI / 6 - Math.PI / 2) * 40);
        tick.setAttribute("x2", 55 + Math.cos(i * Math.PI / 6 - Math.PI / 2) * 47);
        tick.setAttribute("y2", 55 + Math.sin(i * Math.PI / 6 - Math.PI / 2) * 47);
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
        fullscreenCheckInterval: updateContainerIfFullScreen(container => {
            if (!container.contains(clock)) container.appendChild(clock);
        })
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
        if ((minutes === 0 || minutes === 15 || minutes === 30 || minutes === 45) && minutes !== lastAnnouncedMinute) {
            lastAnnouncedMinute = minutes;
            var hour = now.getHours();
            var time = (minutes === 0) ? `It's ${hour} o'clock` : `It's ${hour}:${minutes.toString().padStart(2, '0')}`;
            speak(time, "en-US", function () { });
        }
    }

    function speak(what, voiceLang, callback) {
        const utterance = new SpeechSynthesisUtterance(what);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voiceLang ? voices.filter((v) => v.lang === voiceLang)[0] : voices[0];
        utterance.onend = callback;
        if (utterance.voice?.voiceURI) {
            utterance.voiceURI = utterance.voice.voiceURI;
        }
        if (utterance.voice?.lang) {
            utterance.lang = utterance.voice.lang;
        }
        speechSynthesis.speak(utterance);
    }

    function updateContainerIfFullScreen(callback, pollInterval = 1000, fallbackElement = document.body) {
        return setInterval(() => {
            const fullscreenElement = document.querySelector(':fullscreen');
            if (fullscreenElement) {
                callback(fullscreenElement);
            } else {
                callback(fallbackElement);
            }
        }, pollInterval);
    }
})();
