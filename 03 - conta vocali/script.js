/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const word2 = 'javascript';

// Dichiara la funzione qui.
function litteral(word) {
    let array_word= word.split("")
    let vowel=["a", "e", "i", "o", "u"]
    let result= [];
    for (let i = 0; i < word.length; i++) {

       if (vowel.includes(array_word[i])) {
      result.push(array_word[i])
        
       }
        
    }
    return result
}



 litteral=(word2)=> {
    let array_word= word2.split("")
    let vowel=["a", "e", "i", "o", "u"]
    let result= [];
    for (let i = 0; i < word2.length; i++) {

       if (vowel.includes(array_word[i])) {
      result.push(array_word[i])
        
       }
        
    }
    return result
}
// Invoca la funzione qui e stampa il risultato in console

console.log(litteral(word));
console.log(litteral(word2));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)