class Car {

    // constructeur 1
    constructor(brand) {
        this.carname = brand;
    }

    // constructeur 2
    /*constructor(brand,puissance) {
        this.carname = brand;
        this.puis=puissance;
    }
*/

    // la fonction affichercarname
    afficherCarname(x) {
        return x + ", I have a " + this.carname;
    }
}
class Person {
    // constructeur
    constructor(x, y, z) {
        this.lastname = x;
        this.firstname = y;
        this.age = z;

    }
    afficherLastname(x) {
        return x + ", Mon nom est: " + this.lastname;

    }
    afficherFirstName(x) {
        return x + ", Mon prenom est: " + this.firstname;

    }

    afficherAge(x) {
        return x + ", Mon age est: " + this.age;

    }


}
// instanciation objet Car  
mycar = new Car("Ford");

// Instanciation de l'objet person
p1 = new Person("Paul", "Mike", 37)
    // affichage dans le html les infos des objets Car
document.getElementById("demo0").innerHTML = mycar.afficherCarname("Hello");
document.getElementById("demo4").innerHTML = mycar.carname;

// affihage dans le html des objets Person
document.getElementById("demo1").innerHTML = p1.afficherLastname("Hé toi");
document.getElementById("demo2").innerHTML = p1.afficherFirstName("he toi");
document.getElementById("demo3").innerHTML = p1.afficherAge("Hé toi");