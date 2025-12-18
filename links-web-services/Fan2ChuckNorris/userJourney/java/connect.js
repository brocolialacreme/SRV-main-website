let params = new URLSearchParams(window.location.search); //recup les infos de l'url (infos de l'utilisateur)
//infos provenant de l'url sous forme de variables
let connect = document.getElementById("connectionButton") //bouton de connection
let pseudoConnect = document.getElementById("pseudoID")
let mdpConnect = document.getElementById("passwordID")
let mdp = params.get("password");
let pseudo = params.get("pseudo");
let age = params.get("age")
let fullName = params.get("firstName") + " " + params.get("name")
let mail = params.get("mail")
let genre = params.get("genre")

//quand on appui sur le bouton de connection et bien on verifi si les infos sont les mêmes que celles de l'url, si c'est bon on ouvre la page suivant sinon on efface
function tryConnection(){
    if (mdpConnect.value == mdp && pseudoConnect.value == pseudo){
        window.location.href = "userPage.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
    }
    else {
        mdpConnect.value = "";
        pseudoConnect.value = "";
    }
};

connect.addEventListener("click", tryConnection)
