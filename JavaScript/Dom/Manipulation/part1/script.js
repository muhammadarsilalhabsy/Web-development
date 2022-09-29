/* 
    untuk memanipulasi element ada beberapa method
    <element>.innerHtml 
    <element>.style.<propertyCSS>

    attribute:
    1. <element>.setAttribute()
    2. <element>.getAttribute()
    3. <element>.removeAttribute()

    <element>.classList




*/ 


// ====>    modify a data using "innerHTML"  <====
const modifyJudul = document.getElementById('judul');

// modifyJudul.innerHTML = "Muhammad Arsil Alhabsy";

// ===inner html juga bisa mengubah value di dalam sebuah element===
// modifyJudul.innerHTML = "<em>Otong Surotong</em>";

// const modifySectionA = document.querySelector("section#a");
// modifySectionA.innerHTML = "My Name is Otong";



// ====>    modify a data using "style.<propertyCSS>"   <====
modifyJudul.style.backgroundColor = "orange";


// ====>    modify a data using "Attribute"   <====

// set
const liRed = document.querySelectorAll(".c-red");
liRed[0].setAttribute("name","terserah");
liRed[1].setAttribute("name","terserah");

const mLink = document.querySelector("section#a a");
mLink.setAttribute("id","link");


// get
mLink.getAttribute("href"); // mengambil data link di atribute href
// mLink.removeAttribute("href");



// ====>    modify a attribute class using "classList"   <====
// const li_section = document.querySelector("section#b ul li:nth-child(3)");
const li_section = document.getElementsByTagName("li")[2];
li_section.setAttribute('class',"test");
/*
    classList.add()                                         menambahkan
    classList.remove("nama-kelas")                          meghapus
    classList.toggle("nama-kelas")                          menambahkan jika tidak ada, menghapus jika ada
    classList.item(1)                                       index mengembalikan str
    classList.replace("class-lama","class-terbaru")         mengubah/ mengganti nama
    classList.contains("nama-kelas")                        mengecek kelas yang ada, dan mengembalikan boolean




*/
li_section.classList.add("boleh");













