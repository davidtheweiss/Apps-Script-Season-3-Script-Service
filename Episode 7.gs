function doGet(e) {
  return HtmlService.createTemplateFromFile('Episode 7 HTML').evaluate();
}

function doPost(e) {
  return HtmlService.createHtmlOutput(`<p>${e.postData.contents}</p>`);
}
