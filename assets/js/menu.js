// Sélectionne le bouton du menu burger à l'aide de son ID
const burgerButton = document.getElementById('burger-button');

// Sélectionne la liste de navigation associée au menu burger
const burgerList = document.getElementById('ul-burger');

// Ajoute un écouteur d'événement au clic sur le bouton burger
burgerButton.addEventListener('click', function () {
    
    // Bascule la classe "active" sur la liste 
    burgerList.classList.toggle('active');
});