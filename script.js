function signup() {
    var newusername = document.getElementById("newusername").value;
    var newpassword = document.getElementById("newpassword").value;

    localStorage.setItem(newusername, newpassword)
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (localStorage.getItem(username) === password) {
        alert('로그인 성공');
    }
}
