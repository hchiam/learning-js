/**
 * (NOTE: requires jQuery!)
 */
function getAllEventsOnPage() {
  const allEventsOnPage = [];

  $("*").each(function () {
    const element = $(this).get(0);
    const events = $._data($(this).get(0), "events");
    if (events) {
      allEventsOnPage.push({ events, element });
    }
  });

  console.log(allEventsOnPage);
  return allEventsOnPage;
}
