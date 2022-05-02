// write js code here corresponding to index.html
// You should add submit event on the form

// document.addEventListener("");

document.querySelector("#masaiForm").addEventListener("submit",add);

var arr = JSON.parse(localStorage.getItem("schedule"))||[];
function add(){
 
    event.preventDefault();
    console.log('clicked');
    var data = {
        "matchNumber": masaiForm.matchNum.value,
        "teamA": masaiForm.teamA.value,
        "teamB": masaiForm.teamB.value,
        "date": masaiForm.date.value,
        "venue": masaiForm.venue.value,
    }

    arr.push(data);
    localStorage.setItem("schedule",JSON.stringify(arr));

}