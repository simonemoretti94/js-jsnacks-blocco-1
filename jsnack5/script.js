//script

//script

//script

const vettore = [];

for (let i = 0; i < 10; i++) {
    let n = prompt('Write below a number');

    if (isNaN(n) === true) {
        console.log('Not a number');
        i = 11;
        // continue;
    }
    else if (n % 2 === 0) {
        console.log(n, ' is even');
    }
    else {
        console.log(n, ' is odd!');
        vettore.push(n);
    }
}

i = 0;

if (vettore.length != 0) {
    
    for(i = 0; i < vettore.length; i++) {
        console.log('vettore element pos: ', i, ' is ',vettore[i]);
    }

    alert('Please open inspector\'s console to check odd numbers');

}
else {
    alert('You wrote only even  numbers!');
}

alert('Shalom!');



