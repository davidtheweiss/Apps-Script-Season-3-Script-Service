function setUpTrigger() {
  ScriptApp.newTrigger('logChanges')
  .forSpreadsheet('1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4')
  .onChange()
  .create();
}

function logChanges(e) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Change Log')
  const lastRow = sheet.getLastRow();
  
  sheet.getRange(lastRow + 1, 1, 1, 4).setValues([
    [e.changeType,
     e.source.getSheetName(),
     e.source.getActiveSheet().getActiveRange().getA1Notation(),
     new Date()]
  ]);
}
