// list of chuck norris facts
const chuckFacts = [
  "Chuck Norris peut diviser par zéro.",
  "Un jour Chuck Norris a eu un zero en latin, depuis c'est une langue morte.",
  "L'avenir se demande parfois ce que Chuck Norris lui réserve.",
  "Chuck Norris ne sait pas à quoi ressemble Nicolas Sarkozy, en effet Chuck Norris ne baisse jamais les yeux.",
  "Chuck Norris n'a pas de père. On ne nique pas la mère de Chuck Norris.",
  "Chuck Norris ne ment pas, c'est la vérité qui se trompe.",
  "Les ennemis de Chuck Norris lui disent souvent d'aller au diable. Le Diable aimerait bien qu'ils arrêtent.",
  "La Grande Muraille de Chine a été construite pour arrêter Chuck Norris… elle a échoué.",
  "Cherchez l'intrus : Un rouge-gorge, un pigeon, un moineau et Chuck Norris. Réponse : Un rouge-gorge, un pigeon et un moineau.",
  "Quand Chuck Norris lance une pièce, elle fait toujours pile: personne ne fait face à Chuck Norris!",
  "Chuck Norris a déjà compté jusqu'à l’infini. Deux fois.",
  "Chuck Norris ne porte pas de montre. Il décide de l’heure.",
  "Les larmes de Chuck Norris peuvent guérir le cancer… mais il ne pleure jamais.",
  "Chuck Norris ne se masturbe jamais. Chuck Norris est inébranlable.",
  "Hercule est un demi-dieu, Dieu est un demi-Chuck Norris",
  "Chuck Norris peut allumer un feu en frottant deux glaçons ensemble.",
  "Moïse a coupé la mer en deux. Chuck Norris l'a recollé en disant : tu refais ça, je te pète la gueule.",
  "Un jour, un gaulois a cru qu'il pouvait attaquer Chuck Norris après avoir bu de la potion magique. Il s'appelait Paraplégix",
  "Chuck Norris a gagné un tournoi de poker avec des cartes pokémon",
  "Chuck Norris a déjà eu Alzheimer. Il s'en souvient très bien.",
  "Chuck Norris a retrouvé Ornicar.",
  "Chuck Norris a déja frôlé la mort....elle ne s'en est jamais remise.",
  "Chuck Norris a déjà été sur Mars… Depuis il n'y a plus de vie sur Mars.",
  "Chuck Norris a planté son ordinateur. Et il a fleuri.",
  "Chuck Norris peut y aller par 4 chemins",
  "Le fusil a pompe de Chuck Norris est en prison pour port d'arme illégal.",
  "Chuck Norris n’a pas de carte bancaire. Il dicte les nombres au distributeur.",
  "Même l'évidence se rend à Chuck Norris.",
  "Un jour un mec a refuser de filer une clope à Chuck Norris. Depuis, on prévient sur tous les paquets que Fumer tue.",
  "Chuck Norris peut te prouver que la condamnation à mort n'est pas la peine maximale."
];

let param = new URLSearchParams(window.location.search); //elements de l'url (infos de l'utilisateur)
// on génère une phrase aleatoire
function generateChuckFact() {
  if (!param.get("pseudo")){
    alert("pour acceder à cette fonctionnalité veuillez vous creer un compte");//si on est pas connecter et bien on ne peut pas utiliser la fonctionnalité
  } 
  else{
    if (param.get("pseudo") != "null"){
      //choix aleatoire de la citation
      const randomIndex = Math.floor(Math.random() * chuckFacts.length);
      const fact = chuckFacts[randomIndex];
  
      // on change le texte de la balise dans la page html
      const textDiv = document.getElementById("chuck-text");
      textDiv.textContent = fact;
    }
    else{
      alert("pour acceder à cette fonctionnalité veuillez vous creer un compte");
    }
  }
}

// bouton de génération
document.getElementById("generate-btn").addEventListener("click", generateChuckFact);


//ici si l'utilisateur est connecter et bien l'image change (src)
let img = document.getElementById("imgWelcome");
let title_ = document.getElementById("title")
if (param.get("pseudo") != "null" && param.get("pseudo") != null){
  img.src = "../img/welcome.jpg"
  title_.textContent += " " + param.get("fullName")
}
else{
  img.src = "../img/Connectez-vous.jpg"
}
