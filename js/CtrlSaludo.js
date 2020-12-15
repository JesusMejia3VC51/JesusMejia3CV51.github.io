export class CtrlSaludo{
/** @param {string} nombre */
calculaSaludo(nombre) {
const nombreSinEspacios = nombre ? nombre.trim() : "";
if (!nombreSinEspacios) {
throw new Error("Falta poner el nombre");
}
return `Hola ${nombreSinEspacios}:`;
}
calculaBoleta(boleta) {
const boletaSinEspacios = boleta ? boleta.trim() : "";
if (!boletaSinEspacios) {
throw new Error("Falta la boleta");
}
return `Tu boleta es: ${boletaSinEspacios}:`;
}
calculaGrupo(grupo) {
const grupoSinEspacios = grupo ? grupo.trim() : "";
if (!grupoSinEspacios) {
throw new Error("Falta poner el grupo");
}
return `Tu grupo es: ${grupoSinEspacios}:`;
}
calculaMateria(materia) {
const materiaSinEspacios = materia ? materia.trim() : "";
if (!materiaSinEspacios) {
throw new Error("Falta poner la materia");
}
return `Tu materia es: ${materiaSinEspacios}:`;
}
calculaFecha(fecha) {
const fechaSinEspacios = fecha ? fecha.trim() : "";
if (!fechaSinEspacios) {
throw new Error("Falta poner la fehca");
}
return `La fecha es: ${fechaSinEspacios}:`;
}
}
