if (window.history) {
  var urlWithQuery = window.location.origin + "/?someQuery=someValue";
  window.history.pushState({ path: urlWithQuery }, "", urlWithQuery);
}
