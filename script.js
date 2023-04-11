/*
Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!
*/

const learners = ["Marine", "Delphine", "Steve", "Willy", "Abel", "Ismael", "Thomas", "Julien", "Jodie"];
function randomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    return colors[Math.floor(Math.random()* colors.length)];
}

for (let i=0; i < learners.length; i++) {
    const section = document.createElement("section");
    section.style.backgroundColor = randomColor();
    const name= document.createTextNode(learners[i]);
    const paragraph = document.createElement("p");
    paragraph.appendChild(name);
    section.appendChild(paragraph);
    document.querySelector("article").appendChild(section);
}
