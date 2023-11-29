//script


let n = 0;
let somma = 0;
for (let i = 0; i < 10; i++) {
    n =  prompt('Inserisci un numero:');

    console.log(n);

    somma += parseFloat(n);
}

console.log(parseFloat(somma));

alert('See you soon!');