// Déclaration de variable
let toto = 1;
const tata = 2;
var zoubida = 3;

// Type de variable

let string = "Zoubida est JL"; // Chaine de caractère
string = "Zoubida"; // Modification de la valeur d'une variable
let boolean = true; // Varialbe de type levier dont l'état peut etre vrai ou faux.
let numberFloat = 22.22; // Type number - Float (nombre a virgule)
let numberInt = 22; // Type number - integer (nombre entier)
let array = new Array(string, boolean, numberFloat, numberInt, []); // Tableau pour stocker un ensemble de variable 
let object = { nom: 'Sylvestre', prenom: "Mike", age: numberInt } // Tye Object en js (json)
    // object.nom


// ************************ Petit exo ************************ //


let bdd = [] // Stockage des utilisateurs

/**
 *
 *  Ajoute dans le tableau(array) bdd le nouvelle utilisateur
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */
function inscription(name, email, password) {

    // array.push => Ajoute l'élément dans un tableau à la fin
    bdd.push({
        name: name,
        email: email,
        password: password,
    })
}

/**
 *
 *  Retour le nom de l'utilisateur ou false si il n'ai pas inscrit
 * @param {*} email
 * @param {*} password
 * @returns boolean | string
 */
const connexion = (email, password) => {

    // array.forEach => Est une boucle permettant de parcourir les éléments du tableau
    bdd.forEach((user) => {
        if (user.email == email && user.password == password) { // Si l'email dans le tableau et égal à l'email mis en paramétre ET si le password dans le tableau et égal au password mis en paramétre
            return user.name; // Fin de la fonction, retour de la variable name
        }
    })

    return false; // Fin de la fonction, retour de false
}

const prompts = require('prompts'); // Chargement de module NodeJs pour utiliser le terminal

const menu = async() => {

    /**
     * Dessin dans la console
     */
    console.log("|----------------------|");
    console.log("|                      |");
    console.log("| 1 - Inscription      |");
    console.log("| 2 - Connection       |");
    console.log("| 3 - Exit             |");
    console.log("|                      |");
    console.log("|----------------------|");


    const reponse = await prompts({
        type: 'number',
        name: 'choix',
        message: 'Entrez votre choix: ',
        validate: choix => (choix > 0 && choix < 4) ? true : 'Valeur erreur' // Si la valeur entrez n'ai pas compris entre 1 - 3 alors 'Valeur erreur'
    })

    if (reponse.choix == 1) {
        let user = await prompts([{
            type: 'text',
            name: 'nom',
            message: 'Entrez votre nom: ',
        }, {
            type: 'text',
            name: 'email',
            message: 'Entrez votre email: ',
        }, {
            type: 'text',
            name: 'password',
            message: 'Entrez votre password: ',
        }])
        inscription(user.nom, user.email, user.password) // Appel de la fonction inscription
        menu() // Appel de la fonction menu
    } else if (reponse.choix == 2) {
        let user = await prompts([{
            type: 'text',
            name: 'email',
            message: 'Entrez votre email: ',
        }, {
            type: 'text',
            name: 'password',
            message: 'Entrez votre password: ',
        }])
        let reponse = connexion(user.email, user.password)
        console.log(reponse);
        if (reponse != false) {
            console.log("Bienvenu M./Melle/Mme " + reponse);
        }
        menu()
    }

}

menu()