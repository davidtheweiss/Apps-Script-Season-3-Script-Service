function setUpTrigger() {
  ScriptApp.newTrigger('timestamp')
  .forSpreadsheet('1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4')
  .onEdit()
  .create();
}

function timestamp(e) {
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(e.range.getRow(), 5).setValue(new Date());
}


//function onEdit(e) {
//  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(e.range.getRow(), 5).setValue(new Date());
//}
