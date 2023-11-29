//script

//getting first word
const word1 = prompt('write below the first word');

//getting second word
const word2 = prompt('write below the second word');

console.log('First word: ', word1, ' Second word: ', word2);

if (word1.length > word2.length) {
    
    alert(`the longest is ${word1}`);

    alert(`the lesser is ${word2}`);
}
else if (word1.length < word2.length) {
   
    alert(`the longest is ${word2}`);

    alert(`the lesser is ${word1}`);
}
else {
    
    alert('they have same lenght');
}

alert('Au revoir, Shoshanna!');