javascript:(async() => {
  if (location.host !== 'tasks.google.com') {
    alert('opening Google tasks - rerun the bookmarklet there');
    window.open('https://tasks.google.com/embed/?origin=https://mail.google.com&fullWidth=1&amp;lfhs=2');
    return;
  }
  await addTask('8:30-10 Break');
  await addTask('7-8:30 Study');
  await addTask('6-7 Eat');
  await addTask('4:30-6 Study');
  await addTask('3-4:30 Break');
  async function addTask(taskText,fast=true) {
    const addTaskButton = $x(`//*[contains(text(),'Add a task')]`)[0].closest('button');
    triggerEvent(addTaskButton, 'click'); /* add new task */
   
    await sleep(500); /* slide animation */
   
    const firstTask = $('[aria-label="Active tasks"]').querySelectorAll('[aria-label="Task title"]')[0];
    triggerEvent(firstTask, 'focusin'); /* make textarea available */
   
    const textarea = firstTask.querySelector('textarea');
    textarea.value = taskText; /* actually set the text */
   
    const label = firstTask.querySelector('label');
    triggerEvent(label, 'input'); /* this makes sure the change stays */
   
    await sleep(500); /* before can trigger focusout */
   
    triggerEvent(textarea, 'focusout'); /* collapse so can create another task */
  }
 
  function $x(path) {
    const iterator = document.evaluate(
      path,
      document,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
 
    const elements = [];
    let element = null;
    while ((element = iterator.iterateNext())) {
      elements.push(element);
    }
 
    return elements;
  }
 
  function $(selector) {
    return document.querySelector(selector);
  }
 
  function $$(selector) {
    return document.querySelectorAll(selector);
  }

  function triggerEvent(element, eventName = "", data) {
    /* data = { key: "a" } */
    if (!element || !eventName) return;
    let event;
    if (document.createEvent) {
      event = document.createEvent("HTMLEvents");
      event.initEvent(eventName, true, true);
      event.eventName = eventName;
      if (eventName.includes("key")) {
        console.log(element, eventName, data);
        element.dispatchEvent(new KeyboardEvent("keypress", data));
      } else {
        element.dispatchEvent(event);
      }
    } else {
      event = document.createEventObject();
      event.eventName = eventName;
      event.eventType = eventName;
      element.fireEvent("on" + event.eventType, event);
    }
  }

  async function sleep(milliseconds) {
    await new Promise((r) => setTimeout(r, milliseconds || 1000));
  }
})();
