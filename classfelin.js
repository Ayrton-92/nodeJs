class Felin {
    constructor(nom, couleur, cri, nbdepatte) {
        this.nom = nom;
        this.couleur = couleur;
        this.cri = cri;
        this.nbdepatte = nbdepatte;
    }

}
class Guepard extends Felin {
    constructor(nom, couleur, cri) {
        super(nom, couleur, cri, 4)
    }
}

class Lion extends Felin {
    constructor(nom, couleur, cri) {
        super(nom, couleur, cri, 4)
    }
}
class Chat extends Felin {
    constructor(nom, couleur, cri) {
        super(nom, couleur, cri, 4)
    }
}
class Tigre extends Felin {
    constructor(nom, couleur, cri) {
        super(nom, couleur, cri, 4)
    }
}
class Lynx extends Felin {
    constructor(nom, couleur, cri) {
        super(nom, couleur, cri, 4)
    }
}

var guepard = new Felin('guepard', 'jaune et noir', 'feule', 4);
var lion = new Felin('lion', 'beige', 'rugis', 4);
var chat = new Felin('chat', 'mutlicolor', 'miaule', 4);
var tigre = new Felin('tigre', 'orange et noir', 'rugis', 4);
var lynx = new Felin('lynx', 'beige', 'gémit', 4);

console.log(lion)