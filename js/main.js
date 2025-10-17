import Form from "./modules/validaformModule.js";
import { saibaMais } from "./modules/saibamaisModule.js";
const formTelefone = new Form(document.querySelector('form'))

formTelefone.inicia();
saibaMais();
