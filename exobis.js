tab = [8, 5, 14, 17, 27, -3]
    //let x = prompt()
function multiplie(tab) {
    let x = 2
    for (let i = 0; i < tab.length; i++) {
        tab[i] *= x
    }
}

function copi(tab) {
    let tab2 = []
    let tab3 = []

    for (let i = 0; i < tab.length; i++) {
        tab2[i] = tab[i]
    }
    tab3 = tab
    console.log(tab2)
    console.log(tab3)
}

function reverse(tab) {
    let tab2 = []
    i = tab.length
    for (let j = 0; i != 0; j++) {
        i--
        tab2[j] = tab[i]
    }
    let tab3 = []
    let a = 0
    for (let b = tab.length - 1; b >= 0; b--) {
        tab3[a] = tab[b] // Code du nul
        a++
    }
    console.log(tab2)
    console.log(tab3)

}


copi(tab)
reverse(tab)
multiplie(tab)
console.log(tab)