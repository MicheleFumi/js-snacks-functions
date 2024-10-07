/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initals() {
    first_letter=[];

for (let i = 0; i < names.length; i++) {

    first_letter.push (names[i].charAt(0));
   


}
    return first_letter
  
   
    
}
console.log(initals());





 initals=()=> {
    first_letter=[];

for (let i = 0; i < names.length; i++) {

    first_letter.push (names[i].charAt(0));
   


}
    return first_letter
  
   
    
}
console.log(initals());
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]