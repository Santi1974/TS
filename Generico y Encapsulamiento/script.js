var Sorteo = /** @class */ (function () {
    function Sorteo(nombre) {
        this.nombre = nombre;
    }
    Sorteo.prototype.setNumbero = function (numero) {
        this.numero = numero;
    };
    Sorteo.prototype.getNumero = function () {
        return this.numero;
    };
    Sorteo.prototype.sortear = function () {
        return "Para ".concat(this.nombre, " el ticket es ").concat(this.numero);
    };
    return Sorteo;
}());
var sorteo = new Sorteo("Juan");
sorteo.setNumbero(12548);
console.log(sorteo.sortear());
