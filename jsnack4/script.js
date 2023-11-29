//script

const guests = ['Cecil Schoen', 'Clyde Cohen', 'Don S. Schwartze', 'Arthur McCarty','Simone Moretti', 'Horace O\'Donavan', 'C. Earl Muldoon'];

const guest_name = prompt('Please write below you name; \nMake sure to capitalize Name and Surname first letter.');

console.log('Guest name: ', guest_name, ' Guest list length: ', guests.length);

//declaring counter for utility purpose
let c = -1;

//iterating on the array
for (let i = 0; i < guests.length; i++) {

    console.log('Actual guest: ',guests[i]);
    
    //if in order to verify input ad array index
    if (guest_name === guests[i]) {

        c = i;
    }
}


console.log('c: ',c);

if (c > -1) {
    alert(`${guest_name} found at position #${c}, you can have fun with us!.`);
    
}
else {
    alert(`${guest_name} not found, you cannot enter the party.`)  
 }