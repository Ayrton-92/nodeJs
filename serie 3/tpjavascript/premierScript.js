let x = prompt('Saisir un mot')
document.write("le mot saisie est " + x + ("<BR>"))
let a = x.charAt(0)
let l = x.length
document.write("la premiere lettre du mot saisie est " + a + " la longueur de la chaine est " + l + ("<BR>"))
let e = x.substr(x.length - 1);
document.write("le dernier caractere est " + e)