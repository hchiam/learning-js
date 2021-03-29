# Bookmarklets

More info: https://en.wikipedia.org/wiki/Bookmarklet

<details>

<summary>Only use a bookmarklet after you read and understand its code!</summary>

<a href='javascript:fetch("https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js").then((x) => x.text()).then((x) => eval(x)).then((x) => confetti());'>Confetti</a>

<a href='data:text/html,<html contenteditable style="background:%23333;color:white;font-family:monospace;font-size:2rem;padding:1rem;display:flex;justify-content:center;"></html>'>Notepad</a>

<a href="javascript:(()=>{document.body.contentEditable='true';document.designMode='on';})()">Edit Page Text</a>

<a href='javascript:(function(){{var test=function(){function t(){u=window.open(location.href,"_blank","width=100, top=0, left=0")}function o(){u.resizeBy(5,0)}function n(){u.resizeBy(-5,0)}function e(){c=!1}function i(){c=!0,console.log("starting in 3 seconds"),u.focus(),setTimeout(function(){s(),console.log("test.stop() to stop, and \ntest.go() to continue")},3e3)}function s(){var t=setInterval(function(){c||(clearTimeout(t),u.focus()),f<=u.outerWidth?r=!1:u.outerWidth<=d&&(r=!0),r?o():n()},100)}var u,c=!0,f=screen.width,d=152,r=!0;return t(),i(),u.onbeforeunload=function(){e(),console.log("stopped timer")},{stop:e,go:i,popup:u}}();"undefined"!=typeof window&&(window.test=test),"undefined"!=typeof module&&(module.test=test);}})();'>Test Screen Widths</a>

<a href='javascript:(function(){var actions=[];function listenToChangesInAnyElement(o){if(o.originalEvent&&o.target===this){if(!this.is(":hidden")){var n=this,e=n.prop("tagName")+(n.prop("id")?"#"+n.prop("id"):"")+(n.prop("class")?"."+n.prop("class").split("%20").join("."):""),i=Array.from(this.parents()).map(o=>o.tagName+(o.id?"#"+o.id:"")+(o.className?"."+o.className.split("%20").join("."):"")).reverse().join(">")+">"+e,a=this.val();if(i){var%20c={selector:i,value:a};console.log(c),actions.push(c)}}}}function%20convertActionsToCode(o){return%20o.map(o=>"$(`"+o.selector+"`).click().val(`"+o.value+"`).change()").join(";")}Array.from(document.querySelectorAll("\*")).forEach(o=>o.addEventListener("change",listenToChangesInAnyElement)),console.log("%25cChanges%20to%20visible%20inputs%20will%20now%20be%20recorded%20in%20the%20%25cactions%25c%20array.%20\n\nYou%20can%20copy%20runnable%20code%20to%20clipboard%20by%20running%20\n%25ccopy(convertActionsToCode(actions));%25c%20\nin%20the%20browser%20console.","","color:%20lime;%20background:%20black;","","color:%20lime;%20background:%20black;","");})();'>Record Form Input Steps to generate code</a>

</details>
