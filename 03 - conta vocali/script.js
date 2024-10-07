/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


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

// Invoca la funzione qui e stampa il risultato in console

console.log(litteral(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)