let getIdJudul = document.getElementById('judul'); // return 1 node

// sedikit manipulasi
getIdJudul.style.color = "red";
getIdJudul.style.backgroundColor = "orange";

let getElementP = document.getElementsByTagName('p'); // return HtmlCollection
getElementP[getElementP.length -1].style.backgroundColor = "lightgreen";
getElementP[0].style.color = "cyan";
getElementP[0].style.backgroundColor = "purple";
getElementP[0].style.fontSize = "20px";


let classNameP1 = document.getElementsByClassName("p1"); // HtmlCollection
classNameP1[0].innerHTML = "Hallo Guys, ini diubah dari Js";




