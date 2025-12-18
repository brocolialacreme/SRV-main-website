//changer la valeur du text de l'input range
let slider = document.getElementById("idRange");
let valueText = document.getElementById("ageText");
slider.addEventListener("input", () => {
    valueText.innerHTML = slider.value;
});

//changer de page
let connectButton = document.getElementById("connectButton");
connectButton.addEventListener("click", function(){
    window.open('userConnect.html', '_self')
});

