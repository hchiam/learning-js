// written assuming jQuery is available:
function useIframeLoadingOverlay(
  allLoadedCallback,
  selector = "iframe:not(.wait-for-iframe-to-load):visible"
) {
  const iframeLoadingOverlay = $(".iframe-loading-overlay");
  const originalIframesLoading = $(selector);
  const originalCountOfIframesLoading = originalIframesLoading.length;
  if (originalCountOfIframesLoading === 0) {
    iframeLoadingOverlay.addClass("d-none");
    allLoadedCallback?.();
  } else {
    iframeLoadingOverlay.removeClass("d-none");
    const progressBar = iframeLoadingOverlay.find("progress");
    progressBar.val(0);
    originalIframesLoading
      .addClass("wait-for-iframe-to-load")
      .one("load", function () {
        $(this).removeClass("wait-for-iframe-to-load");
        const recountCurrentIframesLoading = $(selector).filter(
          ".wait-for-iframe-to-load"
        ).length;
        if (recountCurrentIframesLoading > 0) {
          iframeLoadingOverlay.removeClass("d-none");
          const completed =
            originalCountOfIframesLoading - recountCurrentIframesLoading;
          const percent = (completed / originalCountOfIframesLoading) * 100;
          progressBar.val(percent);
        } else {
          iframeLoadingOverlay.addClass("d-none");
          allLoadedCallback?.();
        }
      });
  }
}
