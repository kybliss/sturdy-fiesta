const boxes = document.querySelectorAll('.box');
// const boxClass = element.getAttribute('boxes');
var searchBar = document.querySelector(".searchBtn");
var text = document.getElementById("textarea");

//function for searching for the city, and clearing the boxes in the process

searchBar.addEventListener("click", function(){

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + text.value + "&appid=85000a1b352882fd04e9a2a12a4c34e3")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })


})
