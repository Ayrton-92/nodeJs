class imie {
    constructor(r, n, add, vi) {
        this.rue = r // this = ce qu'on lui donne ici c'est la variable p 
        this.num = n // Ca revien a dire p.rue p.num p.addr p.ville 
        this.addr = add // CREATION DE LA CLASSE
        this.ville = vi
    }
    afficher() {
        let tab = [this.rue, this.num, this.addr, this.ville] // Tableau ou je stock les donner pour les recup dans la boucle
        let row = document.createElement('tr') // créé  
        document.getElementById('tab').appendChild(row) // Affiche
        for (let i = 0; i < tab.length; i++) { //Boucle For pour afficher les case du tableau
            let pmm = document.createElement('th') // Créé
            pmm.innerText = tab[i] // j'envoie les donneé dans la case
            document.getElementById('tab').appendChild(pmm) //affiche
        }
    }
}

function recu() { // Fonction pour recuperer les donne
    r = document.getElementById('rue').value // value sert a recu la valeur dans l'input
    n = document.getElementById('N').value
    add = document.getElementById('addr').value
    vi = document.getElementById('ville').value
    let p = new imie(r, n, add, vi).afficher() // appel de la fonction afficher 

}