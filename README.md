<div align="center">

  <img alt="Logo Eu Chef" src="https://github.com/kabianca/social-network/blob/main/src/assets/cooking.png" style="height: 100px;">

  # **Eu Chef:** _sua rede de receitas_

  <img src='https://img.shields.io/github/languages/top/kabianca/social-network'>
  <img src='https://img.shields.io/github/package-json/keywords/kabianca/social-network'>
  <img src='https://img.shields.io/github/last-commit/kabianca/social-network'>

  <br>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node.js" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" style="height: 30px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="height: 30px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style="height: 30px;"/>

  <br>

  **Status do Projeto:** _Concluído_ 
    
  O **resultado final** pode ser visitado [aqui](https://kabianca.github.io/social-network/)!!
</div>

## **Indice**
- [1. Apresentação](#1-apresentação)
- [2. Autoras](#2-autoras)
- [3. Eu Chef](#3-eu-chef)
  - [3.1 Funcionalidades](#31-funcionalidades)
- [4. Protótipo de Baixa Fidelidade](#4-protótipo-de-baixa-fidelidade)
- [5. Protótipo de Alta Fidelidade e Considerações da Pesquisa UX](#5-protótipo-de-alta-fidelidade-e-considerações-da-pesquisa-ux)
- [6. Histórias de Usuário](#6-histórias-de-usuário)
  - [6.1 História 1](#61-história-de-usuário-1)
  - [6.2 História 2](#62-história-de-usuário-2)
- [7.Objetivos de Aprendizagem](#7-objetivos-de-aprendizagem)
- [8. Considerações Técnicas](#8-considerações-técnicas)
- [9. Fonte das Imagens](#9-fonte-das-imagens)

## **1. Apresentação**

Esse projeto tem como principal objetivo a construção de uma aplicação com múltiplas telas em Vanilla JavaScript. Realizamos uma rede social de temática livre na qual usuários podem se registrar usando email/senha ou uma conta Google. Logo, desenvolvemos habilidades sobre autenticação com Firebase Auth, persistência de dados com Firestore e encaminhamento (rotas) de páginas ou componentes, e fomos apresentadas ao conceito de SPA (Single Page Application). Entre os desafios estabelecidos consistiam:

- somente usuários cadastrados possuem acesso ao conteúdo; 
- não podem haver usuários repetidos; 
- deve-se usar um e-mail válido para cadastro;
- o acesso a senha é restrito ao usuário. 

Também e alinhando nosa construção à premissa básica das redes sociais, toda a comunidade usuária poderá publicar postagens e/ou excluir suas próprias postagens quando desejar e curtir suas postagens preferidas.

## **2. Autoras**

Social Network foi o nosso terceiro projeto realizado no Bootcamp de Desenvolvimento Web da [Laboratória](https://hub.laboratoria.la/br) e teve como objetivo consolidar metodologias de trabalho em equipes, logo, foi executado pelo trio: [Karla Oliveira](https://github.com/kabianca), [Marina Massaneiro](https://github.com/marinamassaneiro) e [Polyana Magalhães](https://github.com/polyanagm).

## **3. Eu Chef**

A _Eu Chef_ é uma Rede Social com foco na troca de receitas. Tem como objetivo ser uma rede onde é possível publicar suas próprias receitas, acessar receitas publicadas por outras pessoas, curtir e salvar suas receitas favoritas em um livro de receitas único e particular, além de conversar sobre modos de preparos e ingredientes substitutos. A ideia principal é que a comunidade usuária tenha acesso a catálogos de receitas, realize buscas por ingredientes, tempo de preparação ou restrições alimentares e, sobretudo, constribuam com o respositório de receitas suas criações.

Essa rede tem como foco o público adulto, com idade igual ou superior a 18 anos. E visa fornecer um espaço exclusivo e propício à diálogos sobre o universo sensorial atrelado ao universo culinário, seja por meio da troca de receitas, discussões sobre combinação de ingredientes e afins. 

#### **3.1 Funcionalidades:**
- Apenas pessoas cadastradas possuem acesso ao aplicativo.
- Ao criar um cadastro a pessoa usuária será direcionada à página de login e então poderá logar no aplicativo.
- O acesso à timeline fornecerá funcionalidades como postar novas receitas, visualizar todas as receitas armazenadas em nossa base de dados, curtir receitas preferidas e remover curtida de receitas anteriormente curtidas por você.

## **4. Protótipo de Baixa Fidelidade**

<img src="https://github.com/kabianca/social-network/blob/main/prototipo-baixa-fidelidade.jpg" alt="Protótipo de Baixa Fidelidade" style="height: 300px;"/>

## **5. Protótipo de Alta Fidelidade e Considerações da Pesquisa UX e UI**

Os feedbacks recebidos após a exibição do protótipo estiveram relacionados especialmente a elementos associados a UI, ou seja, a **apresentação dos elementos**, **fontes** e **contraste** e foram listados no fluxograma abaixo:

- **Feedbacks**:
  - **_Contraste_**:
    - Título da página no login não possui destaque.
    - Destacar os ícones de sair e home, que estão com pouco contraste em relação ao background da timeline.
  - **_Fontes_**:
    - Evitar Caps Lock para facilitar a leitura.
    - Atenção à acentuação das palavras.
  - **_Apresentação_**:
    - Centralizar o título da página.
    - Padronizar largura e altura dos botões.
    - Página de login não conversa com a timeline.
    - Especificar melhor a dose dos ingredientes (colher de chá, de sopa...).

Após a pesquisa retornamos ao protótipo e iteramos as melhorias sugeridas alcançando o resultado final a seguir:

<img src="https://github.com/kabianca/social-network/blob/main/prototipos-alta-fidelidade-mobile.png" alt="Protótipo Mobile de Alta Fidelidade" style="height: 250px;"/>
<img src="https://github.com/kabianca/social-network/blob/main/prototipos-alta-fidelidade-desktop.png" alt="Protótipo Desktop de Alta Fidelidade" style="height: 20vh width: auto;"/>

## **6. Histórias de Usuário**

Depois de entender as necessidades de seus usuários, escreva as Histórias de
Usuário. Elas representam tudo o que ele precisa fazer/ver na Rede Social. Cada
uma de suas histórias de usuário deve possuir:

### **6.1 História de Usuário 1**

> Uma pessoa se descobrindo no universo culinário em busca de uma rede social de receitas para não gastar com fast food.

* **Critérios de aceitação:**
  * Página de login
  * Página de cadastro
  * Timeline

* **Definição de pronto:**
  * A história implementada foi testada com, pelo menos 3 usuários, e foram incorporados os melhoramentos necessários identificados nos testes de usabilidade.
  * O código está de acordo com o guia e estilos.
  * O código passa nos testes unitários.
  * O código foi feito, ao menos em parte, em pair programming e/ou feito em code review.
  * O código recebeu  _code review_ de pelo menos uma parceira de outra equipe.
  * Ser _responsivo_ e desenvolvido segundo o princípio de _mobile first_.
  * Ser uma SPA.
  * Fazer deploy do aplicativo e marcar a versão (git tag).

### **6.2 História de Usuário 2**

> Uma mãe amamentando um bebe APLV (alergia à proteína do leite de vaca), em busca de um espaço para compartilhar e buscar receitas que não necessitem da proteína do leite de vaca.

* **Critérios de aceitação:**
  * Banco de receitas onde consultar.
  * Campos de inputs para inserir novas receitas.
  * Exposição de todas as receitas, previamente existentes e recentemente inseridas, em forma de timeline.

* **Definição de pronto:**
  * O código está de acordo com o guia e estilos.
  * O código passa nos testes unitários.
  * O código foi feito, ao menos em parte, em pair programming e/ou feito em code review.
  * O código recebeu  _code review_ de pelo menos uma parceira da equipe.
  * Ser _responsivo_ e desenvolvido segundo o princípio de _mobile first_.
  * Ser uma SPA.
  * Fazer deploy do aplicativo e marcar a versão (git tag).

## **7. Objetivos de Aprendizagem:**

Os principais objetivos atrelados a esse projeto se relacionam diretamente a implementação de Web APIs, routing (history API, evento hashchange, window.location), implementar as funcionalidades de gerenciamento de dados com o Firestore Database e gerenciamento de usuários com o Firebase Authenticator. Além disso, optamos por incrementar nossos aprendizados de Git e GitHub administrando nosso [planejamento](https://github.com/users/kabianca/projects/3/views/1) na plataforma do GitHub e atrelando-o ao repositório do projeto, assim teríamos total controle de quais pull requests estariam associados ao avanço/resolução de problemas listados em cards e dispostos em um [Kanban](https://kanbanize.com/kanban-resources/getting-started/what-is-kanban-board) Dashboard.

![Planejamento Estruturado no GitHub Projects](https://github.com/kabianca/social-network/blob/main/planning.png)

## **8. Considerações técnicas:**

A lógica do projeto foi implementada somente em JavaScript (ES6), HTML e
CSS. Neste projeto não está permitido o uso de bibliotecas e frameworks, apenas
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
com exceção da biblioteca Firebase para gestão de usuário e base de dados.

Nosso _boilerplate_ foi organizado da seguinte maneira:

```text
.
├── src
|  ├── assets
|  ├── lib
|  |  ├── __mocks__
|  |  |  ├── exports.js
|  |  ├── auth.js (gestão de usuários)
|  |  ├── config.js (configuração da API)
|  |  ├── exports.js (importação das funções nativas do firebase)
|  |  ├── firestore.js (interação com a base de dados)
|  ├── pages
|  |  ├── login
|  |  |  ├── login.css
|  |  |  ├── login.js
|  |  ├── register
|  |  |  ├── register.js
|  |  ├── timeline
|  |  |  ├── editRecipe.js (modal para edição de mensagens já publicadas)
|  |  |  ├── post.css
|  |  |  ├── post.js (template de impressão das postagens e suas interações)
|  |  |  ├── recipe.css
|  |  |  ├── recipe.js (modal para criação de novas postagens)
|  |  |  ├── timeline.css
|  |  |  ├── timeline.js
|  ├── index.css
|  ├── index.html
|  ├── main.js (rotas)
|  ├── redirect.js
└── test
   ├── pages
   |  |  ├── login.spec.js
   |  |  ├── timeline.spec.js
   └── auth.spec.js

directory: 10 file: 22
```

## **9. Fonte das imagens**

- Logo: <a href="https://www.flaticon.com/free-stickers/cooking" title="cooking stickers">Cooking stickers created by Stickers - Flaticon</a>
- Background protótipo mobile (pimenta removida): Photo by <a href="https://unsplash.com/@pickledstardust?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pickled Stardust</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Background protótipo desktop e versão final: <a href="https://unsplash.com/@amoonra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amoon ra</a> on <a href="https://unsplash.com/s/photos/fruits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
