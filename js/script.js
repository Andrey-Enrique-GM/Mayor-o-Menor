const botonAceptar = document.getElementById("btnAceptar");

botonAceptar.addEventListener("click", function() {

    const number01 = document.getElementById("number01").value;
    const number02 = document.getElementById("number02").value;

    const result = document.getElementById("resultado");

    if (number01 >= number02) {
        result.textContent = number01;
        if (number01 >= 100) {
            result.style.backgroundColor = 'red';
            return;
        }
        else if (number01 < 100) {
            result.style.backgroundColor = 'blue';
            return;
        }
    }
    else if (number02 >= number01) {
        result.textContent = number02;
        if (number02 >= 100) {
            result.style.backgroundColor = 'red';
            return;
        }
        else if (number02 < 100) {
            result.style.backgroundColor = 'blue';
            return;
        }
    }

});