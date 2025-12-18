let page = window.location.pathname.split("/").pop(); //recuperer le nom de la page html ouverte dans l'url
let params = new URLSearchParams(window.location.search); //recuperer les infos de l'url
//infos recup depuis l'url sous forme de variables
let age = params.get("age");
let genre = params.get("genre");
let mail = params.get("mail");
let pseudo = params.get("pseudo");
let mdp = params.get("mdp");
let fullName = params.get("fullName");

//execute ce code si la page ouverte est la page index
if (page === "index.html") {
    let buttonBio1 = document.getElementById("bio1");
    let buttonBio2 = document.getElementById("bio2");
    let buttonAccount = document.getElementById("userAccount");
    
    //fonction pour ouvrir les differentes pages tout en gardant les infos de l'utilisateur dans l'url
    buttonBio1.addEventListener("click",function(){
        //je change l'url actuel pour la nouvelle page avec toutes les infos
        window.location.href = "biographie1.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
    });
    buttonBio2.addEventListener("click",function(){
        window.location.href = "biographie2.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
    });
    //si on est pas co est bien on est redirigé vers la page de creation de compte
    buttonAccount.addEventListener("click",function(){
        if (pseudo != "null"){
            window.location.href = "../userJourney/userPage.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
        }
        else {
            window.location.href = "../userJourney/userCreateAccount.html";
        }
        
    });
}

//si la page ouverte est la page de biographie1
if (page === "biographie1.html"){
    let bio2 = document.getElementById("bio2")
    let index = document.getElementById("index")

    bio2.addEventListener("click",function(){
         window.location.href = "biographie2.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
    })
    index.addEventListener("click",function(){
        window.location.href = "index.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
    })
}

//si la page ouverte est la page de biographie2
if (page === "biographie2.html"){
    if (pseudo != "null"){
        let bio1 = document.getElementById("bio1")
        let index = document.getElementById("index")

        bio1.addEventListener("click",function(){
            window.location.href = "biographie1.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
        })
        index.addEventListener("click",function(){
            window.location.href = "index.html?pseudo=" + encodeURIComponent(pseudo) + "&password=" + encodeURIComponent(mdp) + "&fullName=" + encodeURIComponent(fullName) + "&mail=" + encodeURIComponent(mail) + "&age=" + encodeURIComponent(age) + "&genre=" + encodeURIComponent(genre);
        })
    }
    //si on est pas co (pseudo est null) est bien on a une page alternative qui nous demande de nous connecter
    else{
        window.location.href = "biographie2-blocked.html";
    }
}