import Form from "./modules/validaformModule.js";
import { saibaMais } from "./modules/saibamaisModule.js";
import { eventos } from "./modules/doaocoesModule.js";

const form = new Form(document.querySelector('form'))

form.inicia();
saibaMais();
eventos();