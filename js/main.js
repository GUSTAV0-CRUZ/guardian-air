import Form from "./modules/validaformModule.js";
import { saibaMais } from "./modules/saibamaisModule.js";
import { eventos } from "./modules/doaocoesModule.js";
import { mostraMenu } from "./modules/menuHamburguerModule.js";
import { ModoEscuro } from "./modules/modoEscuroModule.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = new Form(document.querySelector('form'))
    const modoEscuro = new ModoEscuro(localStorage.getItem('tema'))
    
    modoEscuro.inicia();
    form.inicia();
    saibaMais();
    mostraMenu();
    
    if(document.querySelector('#valorDoacaoEscolha')) eventos();
});
