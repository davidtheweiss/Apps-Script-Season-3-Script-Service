function setUpTrigger() {
  ScriptApp.newTrigger('inputRow')
  .forSpreadsheet('16ATpOzCUGpfK1IeR4lebxxnx2gA35R9xwHYjYIpkpeM')
  .onOpen()
  .create();
}

function inputRow(e) {
  const authInfo = ScriptApp.getAuthorizationInfo(e.authMode);
  SpreadsheetApp.getUi().alert(authInfo.getAuthorizationStatus());
  if (authInfo.getAuthorizationStatus() == 'REQUIRED') {
    SpreadsheetApp.getUi().alert(`Please authenticate this script to run here: ${authInfo.getAuthorizationUrl()}`);
  }
  GmailApp.sendEmail('davidtheweiss7@gmail.com', 'Hello', 'Someone accessed your spreadsheet');
  SpreadsheetApp.openById('16ATpOzCUGpfK1IeR4lebxxnx2gA35R9xwHYjYIpkpeM').appendRow([`Hello at ${new Date()}`]);
}
