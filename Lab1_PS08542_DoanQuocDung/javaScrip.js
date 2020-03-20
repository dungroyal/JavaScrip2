function tinhtong() {
    var a = 5;
    var b = 2;
    tong = a + b;

    alert("Tổng: " + a + "+" + b + " = " + tong);
    document.write("Tổng: " + a + "+" + b + " = " + tong);
    console.log("Tổng: " + a + "+" + b + " = " + tong);
    document.getElementById("show").innerHTML = a + "+" + b + " = " + tong;
}

function checklogin() {
    if (document.flogin.username.value == '') {
        alert("Bạn chưa nhập Username");
        document.flogin.username.focus();
        return false;
    }

    if (document.flogin.password.value == '') {
        alert("Bạn chưa nhập Password");
        document.flogin.password.focus();
        return false;
    }
    return true;
}


function checksearch() {
    if (document.search.search.value == '') {
        alert("Bạn muốn tìm gì?");
        document.search.search.focus();
        return false;
    }
    return true;
}

function time() {
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var hour = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    document.getElementById("dongho").innerHTML = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
}
setInterval("time()", 1000);