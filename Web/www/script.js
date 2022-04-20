var nom = document.getElementById('nom')
var blabla = function() {
    nom.value = "blabla"
}
nom.addEventListener('focusout', blabla)