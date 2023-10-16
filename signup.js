let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signup() {
    let username = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;

    if (mobile.length == 0) {
        alert("Enter Mobile Number");
    } else if (mobile.length !== 10) {
        alert("Enter A valid UAE Mobile Number");
    } else {

        let userData = {
            username: username,
            mobile: mobile,
            password: password
        }

        let users = [...getUsersdata, userData];
        localStorage.setItem("usersdata", JSON.stringify(users));


        alert("Signup Successfull");
        window.location.href = "signin.html"
    }


}