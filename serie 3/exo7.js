let mdp = '1234'
let login = 'admin'
const maxtry = 3
let tryU = 0

function connect() {

    let loginU = document.getElementById('loginID').value
    let mdpU = document.getElementById('mdpID').value


    if (loginU == login && mdpU == mdp) {
        window.open('../2emPage.html')
    } else if (tryU == maxtry) {
        document.getElementById('texterr').innerText = "Vous avez fait trop d'essais";
        document.getElementById('body').innerHTML = '<span><p> Vous avez fait trop d essais  </p></span>';
    } else if (loginU != login || mdpU != mdp) {
        document.getElementById('texterr').innerText = 'Les informations sont fausses';
        tryU++;
    }
    console.log(tryU);
}