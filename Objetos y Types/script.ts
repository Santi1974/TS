type Programador ={
    nombre: string,
    tecnologias: string[],
    tomaMate: boolean
} 
let programador:Programador = {
    nombre: "Ricardo",
    tecnologias: ["React", "Angular", "TypeScript"],
    tomaMate: false
}
document.getElementById("nombre")!.textContent = programador.nombre;
let tecnologiasString = '';
programador.tecnologias.forEach(tecnologia => {
    tecnologiasString += tecnologia;
    tecnologiasString += ", ";
});
document.getElementById("tecnologias")!.textContent = tecnologiasString;
document.getElementById("toma-mate")!.textContent = String(programador.tomaMate);