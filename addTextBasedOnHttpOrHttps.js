// I expect to import this code into my projects and have it run right away.
// Import it like this:
//<script src='https://rawgit.com/hchiam/javascriptSandbox/master/addTextBasedOnHttpOrHttps.js'></script>

addTextBasedOnHttpOrHttps();

function addTextBasedOnHttpOrHttps() {
    let thisUrl = document.URL;
	if (thisUrl.includes('https')) {
        // get http link
    	let urlAsHttpNotHttps = thisUrl.substring(0,4) + thisUrl.substring(5);
        alert(urlAsHttpNotHttps);
        // create text to add
    	let addedText = document.createElement('p');
        addedText.id = 'addTextBasedOnHttpOrHttps';
      	addedText.appendChild(document.createTextNode('Is this page not working? Maybe try '));
        // add link to that text
        let aLink = document.createElement('a');
        aLink.href = urlAsHttpNotHttps;
        aLink.innerHTML = 'http';
        aLink.target = '_blank';
        addedText.appendChild(aLink);
        addedText.appendChild(document.createTextNode(' instead of https?'));
      	document.body.insertBefore(addedText, document.body.firstChild);
        // center the added text
        addedText.setAttribute('align','center');
    }
}