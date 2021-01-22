function retour(inputData) {

    const words = inputData.split(' ');
    longeur = words.length
    if (words[0] == "Mike") {
        console.log("le premier mot est mike")
        if (longeur > 2) {
            console.log("longeur ++++")
        } else {
            console.log("longeur")
        }

    } else {
        console.log("mike est introuvable")
    }





}


let data = retour("Mike Je g g g g g g g g ")
console.log(data);