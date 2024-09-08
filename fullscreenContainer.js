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