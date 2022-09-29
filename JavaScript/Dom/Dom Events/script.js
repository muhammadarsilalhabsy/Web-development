// const getP1 = document.querySelector('.p1');
// const getP2 = document.querySelector('.p2');

// // cara 1
// // tidak di rekomendasikan
// function changeColorP1(){
//     getP1.style.backgroundColor = "lightgreen";
// }



// // cara 2 (even hendlenr)
// // mengubah dengan method onclik

// function changeColorP2(){
//     getP2.style.backgroundColor = "lightblue";
// }
// // getP2.onclick = changeColorP2(); tidak perlu di tambahkan (), karena akan langsung dijalankan

// getP2.onclick = changeColorP2;



// // cara 3

// const getButton = document.querySelector(".klik");

// getButton.addEventListener('click', () => {
//     // menambahkan list baru
//     let getUl = document.querySelector('#b ul');
//     let createLi = document.createElement('li');
//     let addTextToLi = document.createTextNode("li baru ");
//     createLi.appendChild(addTextToLi);
//     getUl.appendChild(createLi);
// });


// perbedaan saat menggunakan event listener dan event hendeler


let getLi1 = document.querySelector("section#b ul li");
let getLi2 = document.querySelector("section#b ul li:nth-child(2)");
// menggunakan event handler

// tidak akan di jalankan, karena sudah tertimpah dengan function di bawahnya
getLi1.onclick = function() {
    getLi1.style.backgroundColor = "lightgreen";
}

// akan di jalankan 
getLi1.onclick = function() {
    getLi1.style.color = "purple";
}


// menggunakan eventListenenr

getLi2.addEventListener('click', () => {
    getLi2.style.backgroundColor = "black";
});

getLi2.addEventListener('click', () => {
    getLi2.style.color = "pink";
});