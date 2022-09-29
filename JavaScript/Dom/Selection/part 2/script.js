// querySelection akan menghasilkan sebuah element


// mengubah paragraf 3 dengan document.getElementsByClass

// const p3DOM = document.getElementsByClassName('p3');

// p3DOM[0].style.backgroundColor = "red";

// menggubah paragraf 4 dengan document.querySelector
const p4DOM = document.querySelector("section#b p"); // will return element

p4DOM.style.backgroundColor = "orange";


// mengubah li ke 2
const li2 = document.querySelector("#b ul li:nth-child(2)");

li2.style.backgroundColor = "cyan"


// mengubah paragraf di section 2 mengguanakn querySelectorAll

const getFirstP = document.querySelector('p'); 

getFirstP.style.backgroundColor = "red"; // will change the first list of p

const getAllP = document.querySelectorAll("p");

// getAllP[getAllP.length - 1].style.backgroundColor = "lightblue";

// untuk mengambil semua indeks, atau mewarnai semua index diperlukan looping

for(let i =0; i< getAllP.length; i++){
    getAllP[i].style.backgroundColor = "lightgreen";
}

// mengubah root
const test = document.getElementById("b");
const p_test = test.getElementsByTagName("p")[0];
p_test.style.backgroundColor = "green";
