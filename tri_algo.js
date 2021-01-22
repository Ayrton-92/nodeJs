function echanger(t, i, j) {
    var aux = t[i];
    t[i] = t[j];
    t[j] = aux;
}

function trier(t) {
    var n = t.length;
    for (i = 0; i < t.length; i++) {
        for (j = 0; j < n - i; j++) {
            if (t[j + 1] < t[j]) {
                echanger(t, j + 1, j);
            }
        }
    }
    return t;
}

console.log(trier([1, 5, 40, 4, 9]))