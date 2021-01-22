class Figure {
    constructor(couleur, position) {
            // propriétés de Figure

            this.p = position;
            this.cle = couleur;
        }
        // getters et setters
    set position(x) {
            this.p = x;
        }
        // retourne la taille d'un felin
    get position() {
        return this.p;
    }

    // getters et setters
    set couleur(x) {
            this.cle = x;
        }
        // retourne la taille d'un felin
    get couleur() {
        return this.cle;
    }
    afficher() {
        return ("Je permets d'afficher")
    }
    déplacer() {
        return ("Je permets de déplacer")
    }
    séléctionner() {
        return ("Je permets de séléctionner")
    }
    tourner() {
        return ("Je permets de tourner")
    }
}

// classe fille lion 
class _0D extends Figure {
    constructor(couleur, position) {
        super(couleur, position);

    }

}

class _1D extends Figure {
    constructor(couleur, position, orientation) {
        super(couleur, position);
        this.o = orientation;
    }
    set orientation(x) {
        this.o = x;
    }

    get orientation() {
        return this.o;
    }
}

class _2D extends Figure {
    constructor(couleur, position, orientation, motifRemplissage) {
        super(couleur, position);
        this.o = orientation;
        this.mr = motifRemplissage;
    }
    set orientation(x) {
        this.o = x;
    }

    get orientation() {
        return this.o;
    }

    set motifRemplissage(x) {
        this.mr = x;
    }

    get motifRemplissage() {
        return this.mr;

    }

    remplir() {
        return ("Je permets de remplir");
    }
}

class Point extends _0D {
    constructor(couleur, position) {
        super(couleur, position);

    }

}
class Arc extends _1D {
    constructor(couleur, position, orientation, rayon, angleDebut, angleFin) {
        super(couleur, position, orientation);
        this.r = rayon;
        this.ad = angleDebut;
        this.af = angleFin;

    }
    set rayon(x) {
            this.r = x;
        }
        // retourne la taille d'un felin
    get rayon() {
        return this.r;
    }
    set angleDebut(x) {
            this.ad = x;
        }
        // retourne la taille d'un felin
    get angleDebut() {
        return this.ad;
    }
    set angleFin(x) {
            this.af = x;
        }
        // retourne la taille d'un felin
    get angleFin() {
        return this.af;
    }
    afficher() {
        return ("Je permets d'afficher 1");
    }

}

class Ligne extends _1D {
    constructor(couleur, position, orientation) {
        super(couleur, position, orientation);

    }

}

class Polygone extends _2D {
    constructor(couleur, position, orientation, motifRemplissage, nombreCote, somme) {
        super(couleur, position, orientation, motifRemplissage);
        this.nc = nombreCote;
        this.sm = somme;
    }
    set nombreCote(x) {
        this.nc = x;
    }

    get nombreCote() {
        return this.nc;
    }

    set somme(x) {
        this.sm = x;
    }

    get somme() {
        return this.sm;

    }

    afficher() {
        return ("Je permets d'afficher 1");
    }
}

class Cercle extends _2D {
    constructor(couleur, position, orientation, motifRemplissage, diametre) {
        super(couleur, position, orientation, motifRemplissage);
        this.d = diametre;

    }
    set diametre(x) {
        this.d = x;
    }

    get diametre() {
        return this.d;
    }

    afficher() {
        return ("Je permet d'afficher 1");
    }
    tourner() {
        return ("Je permet de tourner 1");
    }

}

mycercle = new Cercle("Bleu", "haut", "vers l'extérieur", "neutre", "12");
// alert(mycercle.position);
//Instanciation cercle
console.log(mycercle.position);
console.log(mycercle.remplir())
console.log(mycercle.tourner())

//Instantiation polygone

mypolygone = new Polygone("vert", "milieu", "vers l'intérieur", "kaki", "8", "60")
console.log(mypolygone.motifRemplissage)
console.log(mypolygone.afficher());

//instantiation ARC

myarc = new Arc("jaune", "milieu", "pole nord", "5", "90", "10")
console.log(myarc.angleDebut)
console.log(myarc.afficher())

//instantiation Ligne

myligne = new Ligne("noir", "haut", "exterieur");
console.log(myligne.couleur);