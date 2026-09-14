const botonAceptar = document.getElementById("btnAceptar");

botonAceptar.addEventListener("click", function() {

    const number01 = document.getElementById("number01").value;
    const number02 = document.getElementById("number02").value;

    const result = document.getElementById("resultado");

    // isNaN = is not a number
    if (isNaN(number01) || isNaN(number02)) {
        result.textContent = "Debe ingresar solamente numeros"
        return;
    }

    const num1 = Number(number01);
    const num2 = Number(number02);

    
    if (num1 >= num2) {
        result.textContent = num1;
        if (num1 >= 100) {
            result.style.backgroundColor = 'red';
            return;
        }
        else if (num1 < 100) {
            result.style.backgroundColor = 'blue';
            return;
        }
    }
    else if (num2 >= num1) {
        result.textContent = num2;
        if (num2 >= 100) {
            result.style.backgroundColor = 'red';
            return;
        }
        else if (num2 < 100) {
            result.style.backgroundColor = 'blue';
            return;
        }
    }

});