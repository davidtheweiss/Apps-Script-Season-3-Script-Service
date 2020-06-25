function immutableTrigger() {
  ScriptApp.newTrigger('mutableTrigger')
  .timeBased()
  .everyDays(1)
  .create();
}

function mutableTrigger() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const functionName = 'sendEmail';
  
  ScriptApp.getProjectTriggers().forEach(trigger => {
    trigger.getHandlerFunction() === functionName ? ScriptApp.deleteTrigger(trigger) : 0;
  });

  ScriptApp.newTrigger(functionName)
  .timeBased()
  .at(new Date(year, month, day, 12, 0))
  .create();
}

function sendEmail() {
  GmailApp.sendEmail('davidtheweiss7@gmail.com', 'Good Afternoon!', 'This message was sent exactly at noon');
}
