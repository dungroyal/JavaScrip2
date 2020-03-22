function getNumber() {
    var number = document.getElementById("idnumber").value;
    var text = "";
    var i = 0;
    while (i <= number) {
        text += "<span>" + i + "</span>";
        i++;
    }
    document.getElementById("table").innerHTML = text;
}

function chuyenmau() {
    divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        if (i % 2 == 0) {
            divs[i].style.backgroundColor = 'yellow';
            divs[i].style.color = 'red';
        } else {
            divs[i].style.backgroundColor = 'blue';
            divs[i].style.color = 'white';
        }
    }
}

//Bài 3

var arr = [];

for (var i = 0; i <= 10; i++) {
    var number = Math.random() * 100;
    arr[i] = Math.round(number);
}

function layso() {
    text = "";
    for (var i = 1; i <= 10; i++) {
        text += "<div>" + arr[i] + "</div>";
    }
    document.getElementById("container").innerHTML = text;
}

function sapxep() {
    arr2 = arr.sort();
    text = "";
    for (var i = 1; i <= 10; i++) {
        text += "<div>" + arr2[i] + "</div>";
    }
    document.getElementById("container").innerHTML = text;
}

function tongle() {
    tongle = 0;
    for (var i = 1; i <= 10; i++) {
        if (arr[i] % 2 != 0) {
            tongle += arr[i];
        }
    }
    document.getElementById("tongle").innerHTML = "<div>Tổng các số lẻ: " + tongle + "</div>";
}