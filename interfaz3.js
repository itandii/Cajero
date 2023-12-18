let saldo = 88;

function actualizarSaldo() {
    document.getElementById('saldo').innerText = `Saldo actual: $${saldo.toFixed(2)}`;
}

function consultarSaldo() {
    alert(`Tu saldo actual es: $${saldo.toFixed(2)}`);
}

function ingresarMonto() {
    const monto = parseFloat(prompt('Ingrese el monto a depositar:'));
    if (!isNaN(monto) && monto > 0 && saldo + monto <= 990 && saldo + monto >= 10) {
        saldo += monto;
        actualizarSaldo();
        alert(`Se ha ingresado $${monto.toFixed(2)} a tu cuenta.`);
    } else {
        alert('Monto inválido. Lo sentimos, por favor asegúrate de que el saldo resultante esté entre $10 y $990 por política del banco.');
    }
}

function retirarMonto() {
    const monto = parseFloat(prompt('Ingrese el monto a retirar:'));
    if (!isNaN(monto) && monto > 0 && monto <= saldo && saldo - monto >= 10) {
        saldo -= monto;
        actualizarSaldo();
        alert(`Se ha retirado $${monto.toFixed(2)} de tu cuenta.`);
    } else {
        alert('Monto inválido. Lo sentimos, por favor asegúrate de que el saldo resultante esté entre $10 y $990 por política del banco.');
    }
}


// Inicializar el saldo al cargar la página
actualizarSaldo();