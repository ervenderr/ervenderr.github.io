
function SendEmail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("content").value
    };

    const serviceID = "service_8wqt51v";
    const templateID = "template_12k67h8";

    emailjs.send(serviceID, templateID, params).then(
        function (res) {
            alert("success! email has been sent");
        }
    );
}