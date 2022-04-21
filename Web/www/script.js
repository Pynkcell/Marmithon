//Verification globale pour la validation du formulaire
var valid = {
    'nom' : false,
    'prenom' : false,
    'username' : false,
    'birthdate' : false,
    'password' : false,
    'mail' : false
}

//Verification du nom de famille
var nom = document.getElementById('lastname')
var reg_nom = new RegExp(/^[a-zA-Z]+-?[a-zA-Z]+$/)
var verifNom = function() {
    if(!reg_nom.test(nom.value)){
        nom.className = "red"
        valid.nom=false
    }
    else {
        nom.className = ""
        valid.nom=true
    }
}
nom.addEventListener('focusout', verifNom)



//Verification du prenom
var prenom = document.getElementById('firstname')
var verifPrenom = function() {
    if(!reg_nom.test(prenom.value)){
        prenom.className = "red"
        valid.prenom = false
    }
    else {
        prenom.className = ""
        valid.prenom = true
    }
}
prenom.addEventListener('focusout', verifPrenom)


//Verification du nom d'utilisateur lors de l'enregistrement
var username = document.getElementById('username')
var reg_username = new RegExp(/^\w{6}\w*$/)
var verifUsername = function() {
    if(!reg_username.test(username.value)){
        username.className = "red"
        valid.username = false
    }
    else {
        username.className = ""
        valid.username = true
    }
}
username.addEventListener('focusout', verifUsername)



//Verification de l'adresse mail
var mail = document.getElementById('useremail')
var reg_mail = new RegExp(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/)
var verifMail = function() {
    if(!reg_mail.test(mail.value)){
        mail.className = "red"
        valid.mail = false
    }
    else {
        mail.className = ""
        valid.mail = true
    }
}
mail.addEventListener('focusout', verifMail)


//Verification de la date
var date = document.getElementById('birthdate')
var birthdate = new Date()
var reg_birthdate = new RegExp(/^([120]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}/)
var verifBirthdate = function() {
    if(!reg_birthdate.test(date.value)){
        date.className = "red"
        valid.birthdate = false
    }
    else {
        date.className = ""
        valid.birthdate = true
    }
}
date.addEventListener('focusout', verifBirthdate)



//Verification du mot de passe
var pwd = document.getElementById('userpwd')
var reg_pwd = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/)
var verifPassword = function() {
    if(!reg_pwd.test(pwd.value)){
        pwd.className = "red"
        valid.password = false
    }
    else {
        pwd.className = ""
        valid.password = true
    }
}
pwd.addEventListener('focusout', verifPassword)

/*
Conditions du mdp :
- de 8 à 15 caractères
- au moins une lettre minuscule
- au moins une lettre majuscule
- au moins un chiffre
- au moins un de ces caractères spéciaux: $ @ % * + - _ !
- aucun autre caractère possible: pas de & ni de { par exemple
*/




//Bouton de validation 
var formulaire = document.getElementById('register')
var messageVal = document.getElementById('validForm')

formulaire.addEventListener('submit', function(e){

    var suite = true
    for (const bool in valid) {
        if (!valid[bool]) {
            suite = false
            break
        }
    }

    if(suite) {
        messageVal.className = "hide"
        
    
    }
    else {
        messageVal.className = "red"
        e.preventDefault() 
    }
})



//Message de login
var formulaire = document.getElementById('login')
formulaire.addEventListener('submit', function(e) {
    e.preventDefault()
    var httpRequestLogin = new XMLHttpRequest()

    httpRequestLogin.onreadystatechange = function() {
        if(httpRequestLogin.readyState === 4) {
            document.getElementById('resultLogin').innerHTML = httpRequestLogin.responseText
        }
    }

    httpRequestLogin.open('GET', this.getAttribute('action')+'?username='+e.target[0].value+'&userpwd='+e.target[1].value, true)
    httpRequestLogin.send()

})


