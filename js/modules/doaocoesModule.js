import Form from './validaformModule.js';
import { SaibaMais } from "./saibamaisModule.js";

const displayMostraValor = document.querySelector('#valorDoacaoEscolha');

export function eventos() {
    addEventListener('click', e => {
        const el = e.target;
        if(el.innerText === 'R$5') return valorNoDiplay(el.innerText)
        if(el.innerText === 'R$50') return valorNoDiplay(el.innerText)
        if(el.innerText === 'R$100') return valorNoDiplay(el.innerText)
        if(el.innerText === 'Desejo doar esse valor') return criaPagamento()
    });
    displayMostraValor.addEventListener('keypress', e => {
        Form.removeElementos('.saibaMaisExibido');
        if(e.keyCode === 13) {
            e.preventDefault();
            criaPagamento()
        }
    })
}

const valorNoDiplay = (valor) => {
    Form.removeElementos('.saibaMaisExibido');
    const valorFormatado = valor.replace('R$', '');
    displayMostraValor.value = valorFormatado;
}

const criaPagamento = () => {
    Form.removeElementos('.imagens-js');
    Form.removeElementos('.saibaMaisExibido');
    if(!displayMostraValor.value) return displayMostraValor.after(SaibaMais.criaParagrafo({ msg: 'Adicione um valor', cor: 'red'}))
    const divPagamento = document.querySelector('.div-formaDePagamento');
    divPagamento.appendChild(criaTagImg({ endereco: '../../img/qrCode.png', largura:'50%', altura:'40%'}));
}

const criaTagImg = ({ endereco, largura, altura }) => {
    const img = document.createElement('img');
    img.setAttribute('src', endereco);
    img.style.width = largura;
    img.style.height = altura;
    img.classList.add('imagens-js');
    return img
}
