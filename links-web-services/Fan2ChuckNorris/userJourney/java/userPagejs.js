let nameText = document.getElementById("name")
let params = new URLSearchParams(window.location.search); //infos de l'url concernant l'utilisateur
let fullName = params.get("fullName")
let backButton = document.getElementById("backButton")
let showButton = document.getElementById("showMdp")
let TicTac = true

if (fullName){
    nameText.innerHTML = "BIENVENUE "+ fullName
}
else{
    nameText.innerHTML = "BIENVENUE "+ "/inconnu(e)/"
}

//variables provenant des infos que je recup depuis l'url
let age = params.get("age")
let genre = params.get("genre")
let mail = params.get("mail")
let pseudo = params.get("pseudo")
let mdp = params.get("password")

//les texte que je change pour les valeurs de l'url
let ageText = document.getElementById("age")
let genreText = document.getElementById("genre")
let mailText = document.getElementById("mail")
let pseudoText = document.getElementById("pseudo")
let mdpText = document.getElementById("mdp")

//quand on clique une fois sur deux le password s'affiche sinon je fais une boucle pour mettre autant de point que la longeur du password pour le cacher
showButton.addEventListener("click", function(){
    if (TicTac){
        mdpText.innerHTML = "password : "
        mdpText.innerHTML += mdp 
        TicTac = false
    }
    else{
        mdpText.innerHTML = "password : "
        for (let i = 0; i <= mdp.length; i++){
            mdpText.innerHTML += "•"
        };
        TicTac = true
    }
})

//quand on clique je change l'url pour l'index avec toutes les infos (comme la methode get)
backButton.addEventListener("click", openPage)
function openPage(){
    window.location.href = "../html/index.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
}

//change les textes pour les valeurs de l'url quand on ouvre cette page
ageText.innerHTML += age
genreText.innerHTML += genre
mailText.innerHTML += mail
pseudoText.innerHTML += pseudo

//quand on ouvre la page je cache le mdp par le mm nombre de point grace a la boucle for
for (let i = 0; i <= mdp.length; i++){
    mdpText.innerHTML += "•"
};

//si on a pas de compte et bien je redirige vers le userCreateAccount page
if (pseudo == "null"){window.location.href = "userCreateAccount.html"}