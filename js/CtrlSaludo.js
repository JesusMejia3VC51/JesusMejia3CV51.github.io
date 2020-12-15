export class CtrlSaludo{
/** @param {string} nombre */
calculaSaludo(nombre) {
const nombreSinEspacios = nombre ? nombre.trim() : "";
if (!nombreSinEspacios) {
throw new Error("Falta poner el nombre");
}
return `Hola ${nombreSinEspacios}:`;
}
}
