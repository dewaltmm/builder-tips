// JavaScript Document

Android.sendEmail = function(subject, body) { 
  var extras = {};
  extras[WebIntent.EXTRA_SUBJECT] = subject;
  extras[WebIntent.EXTRA_TEXT] = body;
  window.plugins.webintent.startActivity({ 
      action: WebIntent.ACTION_SEND,
      type: 'text/plain', 
      extras: extras 
    }, 
    function() {}, 
    function() {
      alert('Failed to send email via Android Intent');
    }
  ); 
};