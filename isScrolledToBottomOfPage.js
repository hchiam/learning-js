function isScrolledToBottomOfPage() {
  return (
    Math.round(document.documentElement.scrollTop + window.innerHeight) >=
    document.documentElement.scrollHeight
  ); // vanilla JavaScript
  return (
    Math.round($(document).scrollTop() + window.innerHeight) >=
    $(document).height()
  ); // jQuery
}
