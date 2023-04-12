/*
Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!
*/

// Création de la constante learners
const learners = ["Marine", "Delphine", "Steve", "Willy", "Abel", "Ismael", "Thomas", "Julien", "Jodie", "Bruno", "Emilien", "Louka", "Noa", "Anthony", "Luciano", "Nikko", "Sylvain", "Loic", "Ethan", "Benjamin"];
// Création de la fonction randomColor
function randomColor() {
    const colors = ["rgb(253, 238, 243)", "rgb(255, 204, 228)", "rgb(243, 156, 18)", "rgb(142, 68, 173)", "rgb(52, 152, 219)", "rgb(26, 188, 156)", "rgb(204, 204, 204)"];
    return colors[Math.floor(Math.random()* colors.length)];
}

// Création de la fonction randomOrder qui va mélanger le nom des apprenants à chaque refresh
function randomOrder() {
    return Math.random() - 0.5;
}
// Application de la fonction
learners.sort(randomOrder);

// Création de la fonction isDark qui va adapter la couleur du texte en fonction de la bgColor
function isDark(color) {
    // Convertit la couleur en format RGB
    const rgb = color.match(/\d+/g);
    // Calcule la luminosité de la couleur
    const luminance = Math.sqrt(
        0.299 * (rgb[0] ** 2) +
        0.587 * (rgb[1] ** 2) +
        0.114 * (rgb[2] ** 2)
      );

    // Retourne vrai si la luminosité est inférieure à un seuil
    return luminance < 127.5;
}

// Création de la boucle incluant les fonctions
for (let i=0; i < learners.length; i++) {
    // Création d'une section
    const section = document.createElement("section");
    const bgColor = randomColor();
    section.style.backgroundColor = bgColor;
    const name= document.createTextNode(learners[i]);
    // Création d'un paragraphe
    const paragraph = document.createElement("p");
    // Ajout des noms dans le paragraphe
    paragraph.appendChild(name);
    // Ajout du paragraphe dans la section
    section.appendChild(paragraph);
    document.querySelector("article").appendChild(section);

    if (isDark(bgColor)) {
        paragraph.style.color = "white";
    } else {
        paragraph.style.color = "black";
    }
    
    // Application du style (pas demandé dans cet exercice)
    section.style.width = "200px";
    section.style.marginLeft = "400px";
    paragraph.style.padding = "30px";
    paragraph.style.textAlign = "center";
    paragraph.style.fontWeight = "600";
    paragraph.style.fontFamily = "Verdana";
}