/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = "A"
// Dichiara la funzione qui.
function filter() {
    let filtered= []
    for (let i = 0; i < names.length; i++) {
        
        if (letter == names[i].charAt(0)) {
            filtered.push(names[i])
            
        }
    }

   
    
} 
console.log(filter());



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]