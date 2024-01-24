createDefaultEvent();

/**
 * reference: https://github.com/hchiam/random-code-tips
 */
function createDefaultEvent() {
  const now = getUTCFormattedDateString(new Date());
  createCalendarEvent("Some weekly event", now, now);
}

function getUTCFormattedDateString(date) {
  return date.toISOString().replaceAll(/[-.:]/g, "");
}

function createCalendarEvent(
  summary,
  start = "20160204T090000Z",
  end = "20160204T100000Z"
) {
  const icsString =
    "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Some weekly event//NONSGML v1.0//EN\nBEGIN:VEVENT" +
    "\nRRULE:FREQ=WEEKLY" +
    "\nDTSTART:" +
    start +
    "\nDTEND:" +
    end +
    "\nSUMMARY:" +
    summary +
    "\nEND:VEVENT\nEND:VCALENDAR";

  window.open("data:text/calendar;charset=utf8," + escape(icsString));
}
