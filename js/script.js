function check(name, birth, message) {
    if (name == "" || birth == "" || message == "") {
        alert("All of these fields must be filled")

    } else {
        document.getElementById("regist_box").style.display = "flex"
    }
}

function submit() {
    console.log("submitted");
    let name = document.getElementById("name").value;
    let birth_date = document.getElementById("birth_date").value;
    let message = document.getElementById("message").value
    let gender = document.querySelector('input[name="gender"]:checked').value;
    
    check(name, birth_date, message);

    document.getElementById("name_span").innerHTML = "Nama :"+name
    document.getElementById("date_span").innerHTML = "Tanggal Lahir :"+birth_date
    document.getElementById("gender_span").innerHTML = "Jenis Kelamin :"+gender
    document.getElementById("msg_span").innerHTML = "Pesan :"+message
}

function init() {
    let res = prompt("Please Enter Your Name (Field can't be empty)", "User")

    if (res == "" || res == null) {
        init()
    } else {
        document.getElementById("username").innerHTML = res
    }
}

init()
document.getElementById("submit").addEventListener("click", submit);