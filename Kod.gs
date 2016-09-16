function doGet() {
var contacthtml=HtmlService
      .createTemplateFromFile('contact');
  return contacthtml.evaluate();
}
function createAndSendDocument(subject,message,body) {
  // Create a new Google Doc named 'Hello, world!'
  var doc = DocumentApp.create(subject);

  // Access the body of the document, then add a paragraph.
  doc.getBody().appendParagraph(message);

  // Get the URL of the document.
  var url = doc.getUrl();

  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = doc.getName();

  // Append a new string to the "url" variable to use as an email body.
  if(url!=""){
  body += 'Link to your doc: ' + url;
  }
 

  // Send yourself an email with a link to the document.
  GmailApp.sendEmail(email, subject, body);
 
}
