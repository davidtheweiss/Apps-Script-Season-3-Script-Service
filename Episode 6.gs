function myFunction() {
  ScriptApp.newTrigger('logUpdates')
  .forUserCalendar('davidtheweiss7@gmail.com')
  .onEventUpdated()
  .create();
}

function logUpdates(e) {
  SpreadsheetApp.openById('1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4').getSheetByName('GCal Updates').appendRow([new Date(), e.calendarId]);
}
