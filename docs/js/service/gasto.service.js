import { GASTOS_DB } from "../data/gasto.data.js";
import { GastoCombustible } from "../model/gasto.model.js";

var gastoAnual = {
  2020 : 0,
  2019 : 0,
  2018 : 0,
  2017 : 0,
  2016 : 0,
  2015 : 0
};

function almacenarGastos(){
    for (let i = 0; i < GASTOS_DB.length; i++) {
        const gasto = GASTOS_DB[i];
        localStorage.setItem(gasto.id, JSON.stringify(gasto));

        const anio = gasto.date.getFullYear();
        gastoAnual[anio] += gasto.precioViaje;

    }

    for (const anio in gastoAnual) {
        sessionStorage.setItem(anio, gastoAnual[anio]);
}

}

function procesarGasto(jsonNuevoGasto){
        const nuevoGasto = JSON.parse(jsonNuevoGasto);

        const gasto = new GastoCombustible(nuevoGasto.id, nuevoGasto.vehicleType, nuevoGasto.date, nuevoGasto.kilometers, nuevoGasto.precioViaje);   
        const anio = gasto.date.getFullYear();
        const totalActual = parseFloat(sessionStorage.getItem(anio));

        const totalNuevo = totalActual + gasto.precioViaje;
            sessionStorage.setItem(anio, totalNuevo);

}

export const GastoService = {
    almacenarGastos,
    procesarGasto
};

