function setUpTrigger() {
  ScriptApp.newTrigger('sendConfirmationEmail')
  .forForm('1wA7-VcBpjdE9UnWsCkchBlqKqK7O6LxUrZ-SQ9Ddfok')
  .onFormSubmit()
  .create();
}

function sendConfirmationEmail(e) {
  const recipient = e.response.getRespondentEmail();
  const subject = "RSVP Confirmation";
  const body = `Thank you for responding to my RSVP! To edit your selections, please follow this URL: ${e.response.getEditResponseUrl()}`;
                                                                                                                                      
  GmailApp.sendEmail(recipient, subject, body);
}
