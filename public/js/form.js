
function subscribe() {
    let emailData = document.getElementById("emailConteiner").value;
    let emailKey = "email";
    let emailList = localStorage.getItem(emailKey);
    emailList = emailList + ", " + emailData;
    localStorage.setItem(emailKey, emailList);
}
