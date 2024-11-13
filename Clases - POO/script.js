var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, director, actores, presupuesto) {
        this.titulo = titulo;
        this.director = director;
        this.actores = actores;
        this.presupuesto = presupuesto;
    }
    Pelicula.prototype.getReparto = function () {
        var _this = this;
        var _a;
        var retorno = "La pelicula ".concat(this.titulo, ", dirijida por ").concat(this.director, " es actuada por ");
        console.log((_a = this.actores) === null || _a === void 0 ? void 0 : _a.length);
        this.actores.forEach(function (actor) {
            var _a;
            retorno += actor;
            if (_this.actores.indexOf(actor) + 1 == ((_a = _this.actores) === null || _a === void 0 ? void 0 : _a.length)) {
                retorno += ".";
            }
            else {
                retorno += ", ";
            }
        });
        console.log(retorno);
    };
    return Pelicula;
}());
var terror = new Pelicula("Blade Runner 2049", "Denis Villenenue", ["Ryan Gosling", "Harrison Ford"], 1850000);
terror.getReparto();
