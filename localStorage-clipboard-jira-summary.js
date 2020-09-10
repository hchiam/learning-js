// stores a function in localStorage that uses jQuery to put together a Jira ticket/subtask summary into your clipboard:

localStorage.setItem('getShelvesetComment', `function getShelvesetComment() {
  var storyIdText = $('#parent_issue_summary').text();
  var start = storyIdText ? storyIdText.match(/^CD-\\d+/)[0] + ' / ' : '';
  var comment = start + $('#key-val').text() + ' : ' + $('#summary-val').text();
  // alert(comment);
  console.log(comment);
  return comment;
}
var shelvesetComment = getShelvesetComment();
copy(shelvesetComment);`)

eval(localStorage.getShelvesetComment);
