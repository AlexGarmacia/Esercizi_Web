console.log("node");
console.log("ciao");

const arr1=[1,2,3];

arr1.push(4);

console.log(arr1);

const a=4;
a=5;

arr2.unshift(o);

console.log(arr1,arr2)

const prof={
    "first name":"Roberto",
    cognome:"Delisio",
    età: 48,
    indirizzo: {
        via:"Cesare Pavese",
        città:"Roma"
    }
};

console.log(prof.indirizzo.via);

const prof2= new Object();

prof2.cognome="Rob";
prof2.cognome="Del";

console.log(prof2);

function persona(nome= '', cognome= ''){
    this.nome=nome;
    this.cognome=cognome;
}

// persona.prototype.telefono="12345"

const Robdel=new persona('Rob', 'Del');
const mariorossi=new persona('Mario', "Rossi");


