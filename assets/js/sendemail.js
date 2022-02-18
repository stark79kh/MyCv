$("#cf-submit").on("click", sendEmail)
function sendEmail (){
    //console.log("test");
    // khai báo dữ liệu
    var vNewMessageObject = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    //thu thập dữ liệu
    getInfoMessage(vNewMessageObject);
    //console.log(vNewMessageObject);
    //kiểm tra dữ liệu
    var validate = aValidate(vNewMessageObject);
    if(validate){
        //gửi email
        Email.send({
            Host : "smtp.gmail.com",
            Username : "stark79kh@gmail.com",
            Password : "tiennv123",
            To : "stark79kh@gmail.com",
            From : "Noter@gmail.com",
            Subject : "Message to my CV",
            Body : `<strong>Name:</strong> ${vNewMessageObject.name} <br/>
                    <strong>Email:</strong> ${vNewMessageObject.email} <br/>
                    <strong>Phone:</strong> ${vNewMessageObject.phone} <br/>
                    <strong>Message:</strong> ${vNewMessageObject.message}`
        }).then(
            ShowThank()
          //message => alert("Đã gửi thành công! Cảm ơn bạn đã quan tâm đến CV của tôi, rất mong được phỏng vấn gần đây")
        );

    }
};

//hàm thu thập dữ liệu
function getInfoMessage(paramObjet){
    paramObjet.name = $("#cf-subject").val().trim();
    paramObjet.email = $("#cf-email").val().trim();
    paramObjet.message = $("#cf-message").val().trim();
    paramObjet.phone = $("#cf-phone").val().trim();
};

//hàm kiểm tra dữ liệu
function aValidate(paramObjet){
    if(paramObjet.phone === ""){
        alert("Vui lòng nhập số điện thoại");
        return false;
    }
    var vRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(!vRegex.test(paramObjet.phone)){
        alert("Vui lòng nhập số điện thoại di động hợp lệ");
        return false;
    }
    if(paramObjet.email === ""){
        alert("Vui lòng nhập địa chỉ Email");
        return false;
    }
    if(!validateEmail(paramObjet.email)){
        alert("Vui lòng nhập địa chỉ Email hợp lệ");
        return false;
    }
    if(paramObjet.name === ""){
        alert("Vui lòng nhập tên bạn hoặc tên công ty của bạn");
        return false;
    }
    if(paramObjet.message === ""){
        alert("Hãy nhập tin nhắn của bạn");
        return false;
    }
    return true;
}

//hàm kiểm tra Email
function validateEmail(paramEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(paramEmail).toLowerCase());
};

//hàm showmodal
function ShowThank(){
    alert("Đã gửi tin nhắn thành công! Cảm ơn quý Công ty và anh chị đã quan tâm đến CV của tôi. Rất mong được sớm có lịch hẹn phỏng vấn gần đây để có thể trao đổi nhiều hơn.");
    $("#cf-subject").val("");
    $("#cf-email").val("");
    $("#cf-message").val("");
    $("#cf-phone").val("");
}