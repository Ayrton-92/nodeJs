class Imie {

    constructor(rue, numero, codeP, ville) {
        this.imieR = rue;
        this.imieN = numero;
        this.imieC = codeP;
        this.imieV = ville;
    }

}
imieParis = new Imie("Marius Aufan", 70, 92300, "Levallois-Perret")
imieNantes = new Imie("route de Rennes", 213, 44700, "Orvault")

document.getElementById("Num").innerHTML = imieParis.imieN;
document.getElementById("Rue").innerHTML = imieParis.imieR;
document.getElementById("CodeP").innerHTML = imieParis.imieC;
document.getElementById("Ville").innerHTML = imieParis.imieV;
document.getElementById("Num2").innerHTML = imieNantes.imieN;
document.getElementById("Rue2").innerHTML = imieNantes.imieR;
document.getElementById("CodeP2").innerHTML = imieNantes.imieC;
document.getElementById("Ville2").innerHTML = imieNantes.imieV;
document.getElementById("adresse").innerHTML = imieParis.imieN + " " + imieParis.imieR + " " + imieParis.imieC + " " + imieParis.imieV;