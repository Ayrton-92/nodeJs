let tab = []

function retour(inputData) {

    let resultat = inputData.split(" ");

    if (resultat.length < 2) {
        return ("Nombre de paramètres insuffisants");
    } else if (resultat[0] != "Mike") {
        return ("Le paramètre Mike est introuvable");
    } else {
        for (let i = 0; i < resultat.length; i++) {
            if (resultat[i] === "") {
                return ('Un des paramètre est erroné')

            }
        }
        for (var i = 0; i < resultat.length; i++) {
            tab[i] = resultat[i]
        }
        return (tab)
    }

}
let data = retour("Mike")
console.log(data);