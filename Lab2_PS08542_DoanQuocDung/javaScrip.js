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