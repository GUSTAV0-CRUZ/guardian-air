# 🌳 Guardiões do Ar

![Logo da ONG](./img/logo.png)

Guardiões do Ar é um projeto **front-end** desenvolvido para a ONG fictícia de mesmo nome, focada na conscientização e ação ambiental. O site serve como um hub central para informações, captação de voluntários e doações.

Este projeto foi construído como entrega final, consolidando práticas profissionais de versionamento, acessibilidade (WCAG 2.1) e otimização para produção.

---

## 🚀 Deploy em Produção

Você pode acessar a versão ao vivo do projeto aqui:

**[https://URL-AQUI.com](https://URL-AQUI.com)**

---

## ✨ Funcionalidades Principais

* **Navegação Multi-página:** Arquitetura com 3 páginas principais (Home, Projetos, Cadastro).
* **Design Responsivo:** Interface adaptável para desktops, tablets e dispositivos móveis.
* **Modo Noturno Acessível:** Interruptor de tema (Sol/Lua) com salvamento da preferência do usuário no `localStorage`.
* **Formulários Interativos:** Validação de formulário (ex: data de nascimento) e feedback ao usuário.
* **Acessibilidade (WCAG 2.1 Nível AA):** Suporte completo a leitores de tela e navegação por teclado.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **HTML5 Semântico:** Para estrutura e acessibilidade.
* **CSS3 Moderno:** Utilizando Variáveis CSS (Custom Properties), Flexbox e Grid Layout.
* **JavaScript (ES6+):** Manipulação do DOM, modularização (ESM) e gerenciamento de estado (Modo Noturno).
* **Git & GitHub:** Controle de versão seguindo o fluxo GitFlow.

---

## ♿ Acessibilidade Implementada (WCAG 2.1)

Um dos pilares deste projeto é a conformidade com o Nível AA da WCAG 2.1:

* **Contraste de Cor:** Todas as combinações de texto e fundo atendem ao rátio mínimo de 4.5:1 (ou 3:1 para texto grande).
* **Navegação por Teclado:** O site é 100% navegável usando apenas a tecla `Tab` (incluindo o interruptor de tema e o menu mobile).
* **Suporte a Leitores de Tela:**
    * Uso correto de tags semânticas (`<main>`, `<nav>`, `<article>`, etc.).
    * Hierarquia de títulos (`h1`, `h2`, `h3`) lógica.
    * Atributos `aria` (como `aria-label`, `aria-expanded`, `aria-controls`) para componentes interativos.
    * Atributos `alt` descritivos em todas as imagens informativas.
* **Modo Noturno / Alto Contraste:** O modo noturno foi projetado para também servir como um modo de alto contraste funcional.

---

## ⚙️ Otimização para Produção

O projeto está otimizado para carregamento rápido:

* **Minificação:** Todos os arquivos CSS e JavaScript são servidos em suas versões `.min` (minificadas).
* **Compressão de Imagens:** Todas as imagens foram otimizadas (via TinyPNG) para reduzir o tamanho do arquivo sem perda de qualidade visível.

---

## 🚀 Como Rodar o Projeto Localmente

Para rodar este projeto em sua máquina local, siga os passos abaixo:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/GUSTAV0-CRUZ/guardian-air.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd guardian-air
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência (ou use uma extensão como o "Live Server" no VS Code).

---

## 👨‍💻 Autor

| [<img src="https://github.com/GUSTAV0-CRUZ.png" width="100px;"/><br /><sub><b>Gustavo Cruz</b></sub>](https://github.com/GUSTAV0-CRUZ) |
| :---: |

* **LinkedIn:** [Gustavo Cruz](https://www.linkedin.com/in/gustavo-cruz-4a467b377/)
* **GitHub:** [@GUSTAV0-CRUZ](https://github.com/GUSTAV0-CRUZ)