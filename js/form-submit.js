function submitForm(){
    var subject, name, message;
    subject = document.getElementById("subject").value
    name = document.getElementById("name").value
    message = document.getElementById("message").value
    var mailLink = 'mailto:portfolioForm@mail.com?&subject=' + subject + ' - ' + name + '&body=' + message;
    document.getElementById("form-submit").href = mailLink;
}