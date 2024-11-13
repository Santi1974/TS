interface Programador{
    nombre:String,
    tecnologias:String[],
    tomaMate?: boolean | null
}

let programador: Programador ={
    nombre: "Matias",
    tecnologias: ["HTML","CSS"],
    tomaMate: false
}

function enviarCurriculum(programador: Programador){
    console.log(`Este Curriculum es de ${programador.nombre}`)
}

enviarCurriculum(programador)