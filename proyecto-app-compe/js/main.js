const usuarios = {
    nombre: "",
    fecha_nacimiento: "",
    categoria: "",
}
console.log(usuarios);

//obtiene nombre de usuario
let nombre_usuario = prompt("Ingrese su nombre completo");
usuarios.nombre = nombre_usuario;

//obtiene fecha de nacimiento del usuario
let nacimiento_usuario = prompt("Por favor, introduce tu fecha de nacimiento (MM-DD-AAAA):");
let fecha_nacimiento = new Date(nacimiento_usuario);
if (!isNaN(fecha_nacimiento)) {
    console.log(`La fecha introducida es valida`);
} else {
    console.log("La fecha introducida no es válida.");
}

usuarios.fecha_nacimiento = nacimiento_usuario;

let fecha_actual = new Date();
let año_actual = fecha_actual.getFullYear();

//obtiene año nacimiento usuario
let año_nacimiento = fecha_nacimiento.getFullYear();

//obtiene categoría
año_categoria = año_actual - año_nacimiento;

if (año_categoria === 12) {
    usuarios.categoria = "Juvenil C";
}
else if (año_categoria === 13) {
    usuarios.categoria = "Juvenil C";
}
else if (año_categoria === 14) {
     usuarios.categoria = "Juvenil B";
}
else if (año_categoria === 15) {
    usuarios.categoria = "Juvenil B";
}
else if (año_categoria === 16) {
    usuarios.categoria = "Juvenil A o Mayores";
}
else if (año_categoria === 17) {
    usuarios.categoria = "Juvenil A o Mayores";
}
else if (año_categoria >= 19) {
    usuarios.categoria = "Mayores";
}
else {
    "Recreativo ??????";
}

/*for (let i = 0; i < usuarios.length; i++) {

}

console.log(usuarios.length);*/