import Form from "./modules/validaformModule.js";
import { saibaMais } from "./modules/saibamaisModule.js";
import { eventos } from "./modules/doaocoesModule.js";
import { mostraMenu } from "./modules/menuHamburguerModule.js";

const form = new Form(document.querySelector('form'))

form.inicia();
saibaMais();
mostraMenu();

if(document.querySelector('#valorDoacaoEscolha')) eventos();
