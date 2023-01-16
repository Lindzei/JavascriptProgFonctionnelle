'use strict';
function computeNotes(n) {
    let notes = [];
    for(let i = 0; i < n; i++) {
        let randomNote = Math.floor(Math.random() * 20) + 1; // Notes généré aléatoirement sinon je ne comprends pas trop l'intérêt de l'exercice
        notes.push(randomNote);
    }
    let sum = notes.reduce((a, b) => a + b, 0);
    let avg = sum / notes.length;
    return avg;
}
let avg = computeNotes(10);
console.log(avg);
