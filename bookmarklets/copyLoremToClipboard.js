javascript: (function () {
  var toClipboard =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis officia nostrum amet a, provident porro veritatis cum nisi odit similique assumenda eum consequatur quae dignissimos animi odio! Voluptatem, libero dolorem a sequi esse assumenda vitae provident minus blanditiis obcaecati iure, sapiente reprehenderit necessitatibus expedita distinctio atque praesentium aliquid voluptas voluptatibus magni recusandae quo laboriosam nostrum! Fuga accusantium doloremque aliquid quis assumenda, quibusdam voluptate dolores quos laboriosam, similique rem voluptates ea nam deleniti! Odit dicta dolorum consequuntur tenetur illo, molestias cupiditate mollitia repellat praesentium sint. Veniam, inventore, velit ducimus consequuntur molestias repellat nihil minima vero magni voluptatem autem ipsum quae?";
  copy(toClipboard);
  function copy(text) {
    var textarea = document.createElement("textarea");
    selection = document.getSelection();
    textarea.textContent = text;
    document.body.appendChild(textarea);
    selection.removeAllRanges();
    textarea.select();
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(textarea);
    alert(`Copied to clipboard:\n\n${text}`);
  }
})();
