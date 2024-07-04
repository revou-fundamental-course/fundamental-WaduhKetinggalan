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

function setBanner(index) {
    let urls = ["https://picsum.photos/seed/picsum/1920/1080", "https://picsum.photos/seed/picsum1/1920/1080", "https://picsum.photos/seed/picsum2/1920/1080"];
    document.querySelector(".banner").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0), black), url("'+urls[index]+'")';
}

function nextIndex(index) {
    if (index >= 2) {
        return 0
    } else {
        return index + 1
    }
}

var index = 0
init()
setInterval(function() {
    index = nextIndex(index)
    setBanner(index);
}, 3500)
document.getElementById("submit").addEventListener("click", submit);