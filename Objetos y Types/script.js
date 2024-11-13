var programador = {
    nombre: "Ricardo",
    tecnologias: ["React", "Angular", "TypeScript"],
    tomaMate: false
};
document.getElementById("nombre").textContent = programador.nombre;
var tecnologiasString = '';
programador.tecnologias.forEach(function (tecnologia) {
    tecnologiasString += tecnologia;
    tecnologiasString += ", ";
});
document.getElementById("tecnologias").textContent = tecnologiasString;
document.getElementById("toma-mate").textContent = String(programador.tomaMate);
