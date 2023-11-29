//script

const n = prompt('Please writ below a four ciphers number');

console.log('You wrote: ', n);

const array = [];

if(isNaN(n) === true) {
    const temp = 1;
    while (temp === 1) {break;}
}

if (n.length < 4) {
    alert('Error, your number\'s length is lesser than 4. Exit');
    const temp = 1;
    while (temp === 1) {break;}    
}
else if (n.length > 4) {
    alert('Error, your number\'s length is greater than 4. Exit');
    const temp = 1;
    while (temp === 1) {break;}    
}
else {
    for (let i = 0; i < n.length; i++) {
        console.log('number index value: ', n[i]);
        array.push(parseFloat(n[i]));
        console.log('array number i value: ', array[i]);       
    }
}

i = 0;

let somma = 0;

for(i = 0; i < 4; i++) {
    console.log('i value: ', i);
    somma += array[i];
    console.log(`sum value at #${i} iteration: `, somma);
}

alert(`Your number\'s four ciphers sum is ${somma}`);

alert('Adjö!');