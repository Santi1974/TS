"use strict";
//Booleanos
let estudiasteJS = false;
// Selecciona el elemento con id "booleanos"
const booleanosDiv = document.getElementById("booleanos");
// Verifica que el elemento no sea null antes de manipularlo
if (booleanosDiv) {
    if (estudiasteJS) {
        booleanosDiv.innerHTML += "<p>Puedes seguir aprendiendo TS</p>";
    }
    else {
        booleanosDiv.innerHTML += "<p>Deberías aprenderlo antes de mirar TS</p>";
    }
}
else {
    console.error("El elemento con id 'booleanos' no se encontró en el DOM.");
}
// Números
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
const numerosDiv = document.getElementById("numeros");
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = ``;
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ", porque juega Messi";
    }
    // Verifica que numerosDiv no sea null antes de acceder a innerHTML
    if (numerosDiv) {
        if (equipo1 > equipo2)
            numerosDiv.innerHTML += `<p>Gana Inter Miami${motivo}</p>`;
        else if (equipo1 < equipo2)
            numerosDiv.innerHTML += "<p>Gana FC Dallas</p>";
        else
            numerosDiv.innerHTML += "<p>Empate</p>";
    }
    else {
        console.error("El elemento con id 'numeros' no se encontró en el DOM.");
    }
}
jugar(interMiami, fcDallas, true);
