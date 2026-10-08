import { GASTOS_DB } from "../data/gasto.data.js";

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

}

export const GastoService = {
    almacenarGastos,
    procesarGasto
};
