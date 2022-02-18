$("#cf-submit").on("click", sendEmail)
function sendEmail (){
    console.log("test");
    var vSubject = $("#cf-subject").val();
    var vEmail = $("#cf-email").val();
    var vBody = $("#cf-message").val();

    Email.send({
        Host : "smtp.gmail.com",
        Username : "stark79kh@gmail.com",
        Password : "tiennv123",
        To : "stark79kh@gmail.com",
        From : vEmail,
        Subject : vSubject,
        Body : vBody
    }).then(
      message => alert("Đã gửi thành công")
    );
}