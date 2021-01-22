let p = document.getElementsByClassName("Pat")

function cre() {
    let pmm = document.createElement('input')
    pmm.className = "Pat"
    document.getElementById('valeur').appendChild(pmm)
}

function pat() {
    let nb = document.getElementById('num').value
    if (nb < 2) alert("Il faut min 2 chiffre")
    else
        for (let i = 0; i < nb; i++) cre()
}

function addition(p) {
    let res = parseInt(p[0].value)
    for (let i = 1; i < p.length; i++) res += parseInt(p[i].value)
    document.getElementById("res").innerHTML = res
}

function multy(p) {
    let res = parseInt(p[0].value)
    for (let i = 1; i < p.length; i++) res *= parseInt(p[i].value)
    document.getElementById("res").innerHTML = res
}

function div(p) {
    let res = parseInt(p[0].value)
    if (p.length > 2) alert("il faut que 2 nombre")
    else {
        for (let i = 1; i < p.length; i++) res /= parseInt(p[i].value)
        document.getElementById("res").innerHTML = res
    }
}

function sous(p) {
    let res = parseInt(p[0].value)
    for (let i = 1; i < p.length; i++) res -= parseInt(p[i].value)
    document.getElementById("res").innerHTML = res
}