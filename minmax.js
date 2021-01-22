let tab = [2, 10, 0, 20, 9]
min = tab[0]
max = tab[0]
for (let i = 0; i <= tab.length; i++) {
    if (tab[i] < min) {
        min = tab[i]
    }
    if (tab[i] > max) {
        max = tab[i]
    }

}
console.log(min, max)