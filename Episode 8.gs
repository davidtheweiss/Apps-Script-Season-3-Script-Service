function myFunction() {
  
  const spreadsheet = SpreadsheetApp.openById('1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4');
  const form = FormApp.openById('1wA7-VcBpjdE9UnWsCkchBlqKqK7O6LxUrZ-SQ9Ddfok');
  
  Logger.log(ScriptApp.getUserTriggers(spreadsheet));
}
