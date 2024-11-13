var programador = {
    nombre: "Matias",
    tecnologias: ["HTML", "CSS"],
    tomaMate: false
};
function enviarCurriculum(programador) {
    console.log("Este Curriculum es de ".concat(programador.nombre));
}
enviarCurriculum(programador);
