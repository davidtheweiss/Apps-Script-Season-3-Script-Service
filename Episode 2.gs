function setUpTrigger() {
  ScriptApp.newTrigger('alert')
  .forSpreadsheet('1xpPBwU-eKfZEPUsZGOJUFiOrVN_locr5tG6kgLO4tX4')
  .onOpen()
  .create();
}

function alert(e) {
  SpreadsheetApp.getUi().alert(`The ID of the trigger which fired: ${e.triggerUid}`);
}


//function onOpen(e) {
//  SpreadsheetApp.getUi().alert(e.authMode);
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  
//}
