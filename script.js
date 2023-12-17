//let varname = "L";
//function i(varname){
    //console.log("Hello, ", varname);
//}
//i(varname)

//let human = {   //declararea obiectului cu datele din acolade atribuite lui
    //fullname: "Object Name",
    //age: 11,
    //email: "email.com"
//};
//console.log(human)   //afisarea cu toti parametrii atribuiti
//console.log(human.fullname)   //afisarea unui parametru


//let cat = {
//     age: 1,
//     catname: "Murka",
//     color: "alb"
// };
// console.log(cat)

// cat.age = 2;    //modificarea valorii parametrului
// cat.color = "sur";

// console.log(cat);
    //se afiseaza obiectul inainte si dupa modificari


//elemente/functii/parametri -> obiect -> clasa


//exemplu de clasa - da eroare deoarece nu am folosit constructorul (см. ряд 90)
// class human{      //o clasa
//     let organe = {     //poate contine obiecte
//         inima: "transportul sangelui",     //parametrii care ii apartin obiectului
//         creierul: "prelucrarea informatiei"
//     }
//     function eat(){     //clasa poate contine functii
//         console.log("Eu mananc");
//     }
//     age: 14,     //poate contine parametri
//     hname: lera
// };


// let info = "behvifie"
// let n = {
//     info: "Lesson 4",
//     display(parametru){
//         console.log(info, parametru);     //info - variabila globala, this.info - variabila/parametrul declarat in cadrul obiectului
//     }
// };

// n.display("Text");    //schimbarea valorii parametrului

                //ctrl + clic pe parametru/variabila/obiect - arata sursa, de unde va fi luata informatia


let phone = {
    brand: "Samsung",
    culoare: "albastru",
    procesor: "Exynos",
    camera: 264,
    incarcator: "type C",

    turnOn(){
        console.log(this.brand, "se porneste")
    },
    discharge(){
        console.log(this.brand, "se descarca")
    },
    call(){
        console.log("Pot suna")
    },
    photo(){
        return "Pot face poze in "+ this.camera + " MP";
    }
};

console.log(phone.brand);
console.log(phone.photo());
phone.call();






class cat{
    constructor(name, age){     //= function constructor(){   }, salveaza parametrii in clasa
        this.name = name;
        this.age = age;
    }
    ceaiepitie(cat1, cat2){   //parametrii
        console.log(cat1, "a venit la", cat2, "sa bea ceai");
    }
    ceaipitea(cat1){
        console.log(cat1, "a venit la", this.name, "sa bea ceai");
    }
};


let barsik = new cat("Barsik", 2);    //obiectul il includem in clasa 
let garfield = new cat("Garfield", 3); 

barsik.ceaiepitie(garfield.name, barsik.name);   //numele pisicelor sunt atribuite la parametrii functiei in ordinea, care nu se schimba
garfield.ceaiepitie(garfield.name, barsik.name);   //nu este nici o diferenta

barsik.ceaipitea(garfield.name);
garfield.ceaipitea(barsik.name);






//overloading - aceleasi nume, functii, insa parametrii diferiti
//!! in JavaScript nu lucreaza !!

// cat(1, 2){

// }
// cat(1, 2, 3, 4){

// }