// Accès à un élément existant dans le DOM
// par l'intermédiaire de document
document.element;

// Méthode des 3S

// Je séléctionne et je stocke
const btnRed = document.getElementById("btn-red");
// console.log(btnRed, "bouton rouge");
const btnBlue = document.getElementById("btn-blue");
// console.log(btnBlue);
let compteur = 0;
// console.log(compteur, "compteur au démarage");

const titre = document.getElementById("titre");
// console.log(titre, "titre h1");

function ajouter() {
  compteur = compteur + 1; // Incrémenter le compteur de 1
  titre.innerText = compteur; // Ajouter le nombre de clique à partir du H1
  console.log(compteur, "compteur après incrémentation");
}

setTimeout(function () {
  // Action à réaliser
  // à la fin du délai
  console.log("fin du chrono");
  // Je supprime les cercles
  btnRed.remove();
  btnBlue.remove();
}, 10000);

// Je soumets l'élément à une action
btnRed.addEventListener("click", function () {
  ajouter();
});

btnBlue.addEventListener("click", function () {
  ajouter();
});
