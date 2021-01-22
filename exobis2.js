function f() {
    a = prompt("longeur du tab")
    tab = []
    for (let i = 0; i < a; i++) {
        tab[i] = prompt("entre une valeur")
    }
    console.log(tab)
    document.getElementById('test').innerHTML = tab
}
f()