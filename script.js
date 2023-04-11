let newTitle = "Modifying the DOM";
document.title = newTitle;
console.log(document.title);

let bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = "#FF69B4";

let body = document.children[0].children[1];
for (let child of bodyElement.children) {
    console.log(child);
}

let titleElement = document.getElementsByTagName("title")[0];
titleElement.classList.add("important");

let imgElements = document.getElementsByTagName("img");
for (let imgElement of imgElements) {
    if (!imgElement.classList.length) {
        imgElement.style.display = "none";
    }
}

let pElements = document.querySelectorAll("p[class]");

for (let pElement of pElements) {
    console.log(pElement.className);
}

{
const pElements = document.querySelectorAll("p");

pElements.forEach(pElement => {
    if (!pElement.classList.contains("important")) {
        pElement.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
});
}