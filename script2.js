function sendEmail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        contact_number : document.getElementById("contact-number").value,
        message : document.getElementById("message").value
    };

    const serviceID = "service_uhbx0ns";
    const templateID = "template_cbuufej";

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
        document.getElementById("name").value = "",
        document.getElementById("email").value = "",
        document.getElementById("subject").value = "",
        document.getElementById("contact-number").value = "",
        document.getElementById("message").value = "",
        console.log(res);
        alert("Your response is successfully submitted");
    })
    .catch((err) => console.log(err));

}