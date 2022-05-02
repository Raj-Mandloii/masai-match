// write js code here corresponding to favourites.html

// write js code here corresponding to matches.html


var getData = JSON.parse(localStorage.getItem("favData"));

console.log(getData);
var body = document.querySelector("tbody");

var favArr = JSON.parse(localStorage.getItem("favourites")) || [];


display(getData);

function display(getData) {
    getData.forEach(function (ele) {
        var row = document.createElement("tr");

        var t1 = document.createElement('td');
        t1.innerText = ele.matchNumber;

        var t2 = document.createElement('td');
        t2.innerText = ele.teamA;

        var t3 = document.createElement('td');
        t3.innerText = ele.teamB;

        var t4 = document.createElement('td');
        t4.innerText = ele.date;

        var t5 = document.createElement('td');
        t5.innerText = ele.venue;

        var t6 = document.createElement('td');
        t6.innerText = "Delete";
        t6.style.color = "green";
        t6.style.cursor = "pointer";

        t6.addEventListener("click", function () {
            del(ele);
        });
        row.append(t1, t2, t3, t4, t5, t6);

        body.append(row);
    });
}

function del(ele) {
    localStorage.deleteItem("favourites",ele);  
    display(getData);  
    // console.log("faARR" + favArr);
}