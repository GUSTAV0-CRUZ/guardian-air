export function validaCpf(cpf) {
    if(!checaStrigCpf(cpf, 14)) return false
    
    const cpfLimpo = limpaCpf(cpf);
    if(!checaStrigCpf(cpfLimpo, 11)) return false

    if(!checaSeEValido(cpfLimpo)) return false;

    return true
}

function checaStrigCpf(cpf, condicaoMax) {
    if(cpf.length > condicaoMax) return false
    return true
}

const limpaCpf = (cpf) => {
    const cpfLImpo = cpf.replace(/[^0-9]/g, '');
    return cpfLImpo
}

const checaSeEValido = (cpfFormatado) => {
    const arrayCpf = [];
    
    for(let letra of cpfFormatado) {
        arrayCpf.push(Number(letra));
    };
    if(digitosRepetem(arrayCpf)) return false;

    const arrayCpfValidar = [ ...arrayCpf ];
    arrayCpfValidar.splice(-2, 2);

    arrayCpfValidar.push(somaNumerosArray(arrayCpf, 9));
    arrayCpfValidar.push(somaNumerosArray(arrayCpf, 10));

    for(let i = 0; i < arrayCpf.length; i++) {
        if(arrayCpf[i] !== arrayCpfValidar[i]) return false;
    }
    
    return true
}

const somaNumerosArray = (array, quantosItem) => {
    const filtrar = [ ...array ]
    const arrayFiltrado = filtrar.splice(0, quantosItem);
    let contador = quantosItem + 1;
    const soma = arrayFiltrado.reduce((acumulador, digito) => {
        digito *= contador
        acumulador += digito
        contador --;

        return acumulador
    }, 0);

    return 11-(soma % 11) > 9 ? 0 : 11-(soma % 11)
}

const digitosRepetem = (array) => {
    for(let digito of array) {
        if(array[1] !== digito) return false
    };
    return true
}
