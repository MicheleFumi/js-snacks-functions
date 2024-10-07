/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const name2 = 'Mario';

// Dichiara la funzione qui.
function alexa(name) {
    let now = new Date()
    let hour = Date.getHours
    const morning = 13
    const evening = 17
    const night = 17
    if (hour <= morning) {
        message = `Buongiorno ${name}`;

    } else if (hour <= evening) {
        message = `Buon pomeriggio ${name}`;
    }
    else {
        message = `Buona sera ${name}`;
    }
    return message
}




alexa=(name2)=> {
    let now = new Date()
    let hour = Date.getHours
    const morning = 13
    const evening = 17
    const night = 17
    if (hour <= morning) {
        message = `Buongiorno ${name2}`;

    } else if (hour <= evening) {
        message = `Buon pomeriggio ${name2}`;
    }
    else {
        message = `Buona sera ${name2}`;
    }
    return message
}

// Invoca la funzione qui e stampa il risultato in console

console.log(alexa(name));
console.log(alexa(name2));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.