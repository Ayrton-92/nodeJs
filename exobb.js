let table = [8, 5, 14, 17, 27, -3]
let table1 = []
let tabe = []


function copie() {
    table1 = table
    console.log(table1)
    return table1
}


function rever() {
    let a = 0
    for (let i = table.length - 1; i >= 0; i--) {
        tabe[a] = table[i]
        a++;
        document.getElementById('inverse').innerHTML = `[${tabe}]`
        console.log(tabe)

    }
    tabe = tabe

    console.log(tabe)
}

function copie() {
    table1 = tabe
    console.log(table1)
    document.getElementById('copier').innerHTML = `[${table1}]`

}

function multi(x) {
    x = document.getElementById('mult').value
    h = []
    a = 0
    for (i = 0; i < tabe.length; i++) { // console.log(tabe[i] * x)
        //console.log(tabe[i] * x)
        h[a] = tabe[i] * x
        console.log(h[a])
        a++
        document.getElementById('multipli').innerHTML = `${h}`
            //console.log(h[a]
    }
}

function anuler() {
    document.getElementById('multipli').innerHTML = ``

}

function annule() {
    document.getElementById('copier').innerHTML = ``


}