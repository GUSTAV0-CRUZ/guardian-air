import validator from 'https://esm.sh/validator';
import { validaCpf } from './validaCpfModule.js';
import { Modal } from './modalEalertModule.js';
const modal = new Modal('Recebido', 'Formulário enviado com sucesso');

export default class Form {
    #inputs = document.querySelectorAll('input');

    constructor(form) {
        this.form = form;
        this.erros = [];
    }
    inicia() {
        modal.criaModal();
        this.camposFormatados();
        this.capturaEventos();
    }

    capturaEventos() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            const el = e.target;
            
            this.erros = [];
            Form.removeElementos('.msg-erros');
            Form.removeElementos('.br-label');

            this.camposPreenchidos(this.#inputs);
            if(this.erros.length > 0) return
            this.camposValidados(this.#inputs);
            if(!this.erros.length > 0) return modal.ativaModal()
            // el.submit();
        })
    }

    camposPreenchidos(inputs) {
        inputs.forEach(input => {
            if(input.id === 'nome' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione seu nome' })
            if(input.id === 'sobrenome' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione seu sobrenome' })
            if(input.id === 'nascimento' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione sua dada de nascimento' })
            if(input.id === 'cpf' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione seu CPF' })
            if(input.id === 'cep' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione seu CEP' })
            if(input.id === 'uf' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione sua UF' })
            if(input.id === 'cidade' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione sua cidade' })
            if(input.id === 'telefone' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione seu telefone' })
            if(input.id === 'email' && !input.value) return this.addMensagens({ id: input, mensagem: 'Adicione seu e-mail' })
        })
    }

    camposValidados(inputs) {
        inputs.forEach(input => {
            if(input.id === 'nome' && input.value.length < 3) return this.addMensagens({ id: input, mensagem: 'Precisa ter mais que três digitos' })
            if(input.id === 'sobrenome' && input.value.length < 3) return this.addMensagens({ id: input, mensagem: 'Precisa ter mais que três digitos' })
            if(input.id === 'nascimento' && !Form.checaIdade(input.value)) return this.addMensagens({ id: input, mensagem: 'Precisa ter mais de 18 anos' })
            if(input.id === 'cpf' && !validaCpf(input.value)) return this.addMensagens({ id: input, mensagem: 'Precisa ser um cpf válido' })
            if(input.id === 'uf' && input.value.length !== 2) return this.addMensagens({ id: input, mensagem: 'Precisa ter dois digitos' })
            if(input.id === 'cidade' && input.value.length < 2) return this.addMensagens({ id: input, mensagem: 'Precisa ter mais de um digito' })
            if(input.id === 'telefone' && input.value.length < 15) return this.addMensagens({ id: input, mensagem: 'Precisa ser um numero válido' })
            if(input.id === 'email' && !validator.isEmail(input.value)) return this.addMensagens({ id: input, mensagem: 'Precisa ser um e-mail válido' })
        });
    }

    addMensagens(obj) {
        const { id, mensagem } = obj;
        const br = document.createElement('br');
        br.classList.add('br-label');

        id.after(Form.criaLabel(mensagem));
        id.after(br) ;
        this.erros.push(mensagem);
    }

    static criaLabel(mensagem) {
        const label = document.createElement('label');

        label.innerText = mensagem
        label.style.color = 'red';

        label.classList.add('msg-erros');
        
        return label
    }

    static removeElementos(identidicador) {
        if(document.querySelector(identidicador) !== null) {
            const apagarEl = document.querySelectorAll(identidicador);
            apagarEl.forEach(el => {
                el.remove()
            });
            return true
        }
        return false
    }

    static checaIdade(string) {
        const formataStrig = string.replace(/[-]/g, '')
        const dataAtual = new Date();

        const anoAtual = dataAtual.getFullYear();
        const mesAtual = dataAtual.getMonth() + 1;
        const diaAtual = dataAtual.getDate();

        const getAno = Number(formataStrig.slice(0, 4));
        const getMes = Number(formataStrig.slice(4, 6));
        const getDia = Number(formataStrig.slice(6, 8));

        if(anoAtual - getAno < 18) return false
        if(mesAtual < getMes) return false
        if(diaAtual < getDia) return false

        return true
    }

    camposFormatados() {
        this.form.addEventListener('click', e => {
            if(document.querySelector('#telefone')) {
                const inputTelefone = document.querySelector('#telefone');
                if(inputTelefone.value.length === 11) {
                    const dd = inputTelefone.value.slice(0, 2);
                    const primeirosDigitos = inputTelefone.value.slice(2, 7);
                    const UltimosDigitos = inputTelefone.value.slice(7, 11);
                    inputTelefone.value = `(${dd}) ${primeirosDigitos}-${UltimosDigitos}`;
                }
            }
            if(document.querySelector('#cep')) {
                const inputCep = document.querySelector('#cep');
                if(inputCep.value.length === 8) {
                    const primeirosDigitos = inputCep.value.slice(0, 5);
                    const UltimosDigitos = inputCep.value.slice(5, 8);
                    inputCep.value = `${primeirosDigitos}-${UltimosDigitos}`;
            }
            }
            if(document.querySelector('#cpf')) {
                const inputCpf = document.querySelector('#cpf');
                if(inputCpf.value.length === 11) {
                    const primeirosDigitos = inputCpf.value.slice(0, 3);
                    const doMeioDigitos = inputCpf.value.slice(3, 6);
                    const UltimosDigitos = inputCpf.value.slice(6, 9);
                    const doisUltimo = inputCpf.value.slice(9, 11);
                    inputCpf.value = `${primeirosDigitos}.${doMeioDigitos}.${UltimosDigitos}-${doisUltimo}`;
                }
            }
        });
    }

}
