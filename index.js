// index.js

// 1. SELECCIÓN
const paragraph 		= document.getElementById("paragraph")
const links 			= document.getElementsByClassName("link")
const divs 				= document.getElementsByTagName("div")
const addItemButton 	= document.getElementById("add-item-button")
const h1s               = document.getElementById("title")
const h2tag = document.createElement("h2")




let parent = document.getElementsByTagName("body")[0]

// 2. MANIPULACIÓN
const attribute = paragraph.getAttribute("id")
const secondAttribute = addItemButton.getAttribute("id")
const thirdAttribute = h1s.getAttribute("id")

paragraph.setAttribute("id", "info-paragraph")
h1s.setAttribute("id", "info-item")

h2tag.innerHTML = "Elephant"



parent.appendChild(h2tag)

console.log(h2tag)
