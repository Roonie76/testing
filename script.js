function sendEmail(){
        Email.send({
    Host    : "smtp.gmail.com",
    Username: "rohinvengatesh04@gmail.com",
    Password: "Kadambur&76",
    To      : 'rohinvengatesh2004@gmail.com ',
    From    : document.getElementById("email").value,
    Subject : "Contact Form Enquiry From Portfolio",
    Body    : "Name: " + document.getElementById("name").value
    +"<br> Email: " + document.getElementById("email").value
    +"<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent Succesfully")
);
    }
  