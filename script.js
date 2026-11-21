function calcular() {

    let capital = parseFloat(document.getElementById("capital").value);

    let riesgo = parseFloat(document.getElementById("riesgo").value);

    let dineroRiesgo = capital * (riesgo / 100);

    document.getElementById("resultado").innerHTML =
        "Riesgo monetario: " + dineroRiesgo.toFixed(2) + " €";

}
