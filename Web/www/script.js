var nom = document.getElementById('nom')
var nom_statu = document.getElementById('nom-statu')

var blabla = function() {
    nom.value = "blabla"
    nom_statu.classList.remove('hide')
    nom_statu.classList.add('valide')
}
nom.addEventListener('focusout', blabla)
document.getElementById('nom').appendChild()
