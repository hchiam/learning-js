javascript: (function () {
  let container = document.getElementById(
    "hchiam-1-bookmarklet-to-rule-them-all"
  );

  if (container) {
    container.style.display =
      container.style.display === "none" ? "block" : "none";
    return;
  }

  container = document.createElement("div");
  container.id = "hchiam-1-bookmarklet-to-rule-them-all";
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 300px;
    max-height: 500px;
    overflow-y: auto;
    background: #f8f9fa;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    z-index: 100000;
    font-family: Arial, sans-serif;
    box-shadow: 0 0 1rem rgba(0,0,0,0.2);
  `;

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.style.cssText = `
    position: sticky;
    top: 10px;
    right: 10px;
    float: right;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 12px;
    cursor: pointer;
  `;
  closeButton.onclick = function () {
    container.style.display = "none";
  };
  container.appendChild(closeButton);

  const title = document.createElement("h3");
  title.textContent = "Bookmarklets:";
  title.style.cssText = "margin-top: 0; color: #333;";
  container.appendChild(title);

  const loadingMsg = document.createElement("div");
  loadingMsg.textContent = "Loading bookmarklets...";
  loadingMsg.style.cssText = "margin: 10px 0;";
  container.appendChild(loadingMsg);

  document.body.appendChild(container);

  function loadAndRunBookmarklet(url) {
    fetch(url)
      .then((response) => response.text())
      .then((code) => {
        if (code.startsWith("javascript:")) code = code.substring(11);
        try {
          const executeFunction = new Function(code);
          executeFunction();
        } catch (error) {
          console.error(`Error executing bookmarklet (${url}):`, error);
          alert(`Error executing bookmarklet (${url}): ` + error.message);
        }
      })
      .catch((error) => {
        console.error(`Error loading bookmarklet (${url}):`, error);
        alert(`Error loading bookmarklet (${url}): ` + error.message);
      });
  }

  const urlToAllBookmarklets =
    "https://api.github.com/repos/hchiam/learning-js/contents/bookmarklets";
  fetch(urlToAllBookmarklets)
    .then((response) => response.json())
    .then((data) => {
      container.removeChild(loadingMsg);

      const list = document.createElement("ul");
      list.style.cssText = `
        list-style: none;
        padding: 0;
        margin: 0;
      `;

      const bookmarklets = data.filter(
        (item) => item.type === "file" && item.name.endsWith(".js")
      );

      if (bookmarklets.length === 0) {
        const noFiles = document.createElement("div");
        noFiles.textContent = "No bookmarklet files found.";
        noFiles.style.cssText = "margin: 10px 0;";
        container.appendChild(noFiles);
        return;
      }

      bookmarklets.forEach((file) => {
        const item = document.createElement("li");
        item.style.cssText = `
          width: 100%;
          padding: 8px 10px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: background-color 0.2s;
        `;

        item.textContent = file.name;

        item.onmouseover = function () {
          this.style.backgroundColor = "lime";
        };
        item.onmouseout = function () {
          this.style.backgroundColor = "transparent";
        };
        item.onclick = function () {
          loadAndRunBookmarklet(file.download_url);
        };

        list.appendChild(item);
      });

      container.appendChild(list);
    })
    .catch((error) => {
      container.removeChild(loadingMsg);

      const errorMsg = document.createElement("div");
      errorMsg.textContent = "Error loading bookmarklets: " + error.message;
      errorMsg.style.cssText = "color: #dc3545; margin: 10px 0;";
      container.appendChild(errorMsg);

      console.error("Error fetching bookmarklets:", error);
    });
})();
