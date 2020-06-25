function setUppTrigger() {
 
  ScriptApp.newTrigger('sendEmail')
  .timeBased()
  .after(10000)
  .create();
  
}

function sendEmail() {
  
  GmailApp.sendEmail('davidtheweiss7@gmail.com', 'Hey You!', 'Hope you have a wonderful day :)');
  
}
