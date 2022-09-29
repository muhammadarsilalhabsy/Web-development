/*

untuk memanipulasi node ada beberapa bethod yang digunakan
1. method lama
 -> document.createElement('p'); 'p,h1,ect'
 -> document.createTextNode("kata kata");
 -> node.appendChild()
 -> node.insertBefore(newNode, nodeBefore)
 -> parentNode.removeChild(node)
 -> parentNode.replaceChild(newNode, oldNode)

*/ 


// create a element
const newP = document.createElement('p');
const newTextP = document.createTextNode("paragraf baru");
newP.appendChild(newTextP);
const getSectionA = document.getElementById('a');
getSectionA.appendChild(newP);




const getSectionB = document.getElementById("b")
const liBaru = document.createElement('li');
const newLi = document.createTextNode("item baru");
const getUl = getSectionB.querySelector("ul");
const getBefore = getSectionB.querySelector("li:nth-child(3)");
liBaru.appendChild(newLi);


getUl.insertBefore(liBaru,getBefore);
const getLiBaru = getUl.querySelector("li:nth-child(3)");
getLiBaru.innerHTML = "<b>hallo guys</b>";



// remove link

const link = getSectionA.querySelector("a")
getSectionA.removeChild(link);


// replace node
const newH2 = document.createElement("h2");
const newTextH2 = document.createTextNode("List Item Baru!");
newH2.appendChild(newTextH2);
const p4 = getSectionB.querySelector("p");
getSectionB.replaceChild(newH2,p4);


newP.style.backgroundColor = "lightgreen";

newH2.style.backgroundColor = "lightgreen";

getLiBaru.style.backgroundColor = "lightgreen";

















// // functionAddNewElement

// function addNewElement(id, element, massage){
//     const getId = document.getElementById(id);
//     const newElement = document.createElement(element);
//     const newMassage = document.createTextNode(massage);
//     newElement.appendChild(newMassage);
//     getId.appendChild(newElement);
// }

// addNewElement("b","h1","Hallo guys")
