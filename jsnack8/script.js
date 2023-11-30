//script

const n = prompt('Please writ below a four ciphers number');

console.log('You wrote: ', n);

let errore =  false;

let totale = 0;

if(isNaN(n) === true) {
    errore  = true;
    
}
else if (n.length < 4) {
    alert('Error, your number\'s length is lesser than 4. Exit');
    errore =  true;
}
else if (n.length > 4) {
    alert('Error, your number\'s length is greater than 4. Exit');
    errore =  true;
}
else {
    
    for (let i = 0; i < n.length; i++) {
        console.log('number index value: ', n[i]);
        totale =  totale + parseInt(n[i]);    
    }
}

if (errore == false) {
    alert(`Your number\'s four ciphers sum is ${totale}`); 
}
else {
    alert('Refresh and try again.')
}
