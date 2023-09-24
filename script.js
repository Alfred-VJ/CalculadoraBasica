let resultado = "0";
let operationCompleted = false;

function mostrarPantalla() {
    document.getElementById('result').textContent = resultado;
}

function clickBtn(value) {
    console.log(resultado);
    console.log(resultado.length);
    console.log(resultado.length > 17);
    if (resultado.length > 17) return false;
    if (resultado == '0') {
        operationCompleted = false;
        if (validateValue(value)) return false;
        resultado = value;
    } else {
        if (operationCompleted) {
            resultado = value;
            operationCompleted = false;
        } else {
            if (HyphenCharacterValidate(value)) {
                if (
                    HyphenCharacterValidate(lastValue(resultado))
                    || PeriodValidate(lastValue(resultado))
                ) return false;
            }
            if (PeriodValidate(value)) {
                if (PeriodValidate(lastValue(resultado))) return false;
            }
            if (validateValue(value)) {
                if (continueWrite(resultado)) return false
            }
            if (validateValue(lastValue(resultado))) {
                if (validateValue(value)) return false
            };
            resultado += value;
        }
    }
    mostrarPantalla();
}

function resetResult() {
    resultado = 0;
    mostrarPantalla();
}

function calcularResultado() {
    try {
        resultado = eval(resultado);
    } catch (e) {
        resultado = "Sintax error";
    }
    operationCompleted = true;
    mostrarPantalla();
}

function validateValue(value) {
    switch (value) {
        case "/":
            return true;
        case "*":
            return true;
        case "+":
            return true;
    }

    return false;
}

function lastValue(result) {
    let lastC = result.slice(-1);
    return lastC;
}

function PeriodValidate(value) {
    return value == "." ? true : false;
}

function HyphenCharacterValidate(value) {
    return value == "-" ? true : false;
}

function continueWrite(result) {
    if (PeriodValidate(lastValue(result))) return true;
    if (HyphenCharacterValidate(lastValue(result))) return true;
    return false;
}

function validateAllOperators(value) {
    switch (value) {
        case "/":
            return true;
        case "*":
            return true;
        case "+":
            return true;
        case ".":
            return true;
        case "-":
            return true;
    }

    return false;
}

function deleteLastCh() {
    resultado = resultado.slice(0, -1);
    if (!resultado.length) resultado = 0;
    mostrarPantalla();
}




