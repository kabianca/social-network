# **Eu Chef:** _sua rede de receitas_ 🥘

## **Indice**
- [1. Apresentação](#1-apresentação)
- [2. Autoras](#2-autoras)
- [3. Eu Chef](#3-eu-chef)
- [4. Protótipo de Baixa Fidelidade](#4-protótipo-de-baixa-fidelidade)
- [5. Protótipo de Alta Fidelidade e Considerações da Pesquisa UX](#5-protótipo-de-alta-fidelidade-e-considerações-da-pesquisa-ux)
- [6. Histórias de Usuário](#6-histórias-de-usuário)
  - [6.1 História 1](#61-história-1)
- [7. Fonte das imagens utilizadas](#7-fonte-das-imagens-utilizadas)

***

## **1. Apresentação**

Esse projeto tem como principal objetivo a construção de uma aplicação com múltiplas telas em Vanilla JavaScript. Realizamos uma rede social de temática livre na qual usuários podem se registrar usando email/senha ou uma conta Google. Logo, desenvolvemos habilidades sobre autenticação com Firebase Auth, persistência de dados com Firestore e encaminhamento (rotas) de páginas ou componentes, e fomos apresentadas ao conceito de SPA (Single Page Application). Entre os desafios estabelecidos consistiam:

- somente usuários cadastrados possuem acesso ao conteúdo; 
- não podem haver usuários repetidos; 
- deve-se usar um e-mail válido para cadastro;
- o acesso a senha é restrito ao usuário. 

Também e alinhando nosa construção à premissa básica das redes sociais, toda a comunidade usuária poderá publicar postagens e/ou excluir suas próprias postagens quando desejar e curtir suas postagens preferidas.

## **2. Autoras**

Social Network foi o nosso terceiro projeto realizado no Bootcamp de Desenvolvimento Web da [Laboratória](https://hub.laboratoria.la/br). Teve como objetivo consolidar metodologias de trabalho em equipes, logo, foi executado pelo trio: [Karla Oliveira](https://github.com/kabianca), [Marina Massaneiro](https://github.com/marinamassaneiro) e [Polyana Magalhães](https://github.com/polyanagm).

## **3. Eu Chef** 

A _Eu Chef_ é uma Rede Social com foco na troca de receitas. Tem como objetivo ser uma rede
onde é possível publicar suas próprias receitas, acessar receitas publicadas por 
outras pessoas, curtir e salvar suas receitas favoritas em um livro de receitas único e 
particular, além de conversar sobre modos de preparos e ingredientes substitutos. A ideia 
principal é que a comunidade usuária tenha acesso a catálogos de receitas, realize buscas por 
ingredientes, tempo de preparação ou restrições alimentares e, sobretudo, constribuam com o 
respositório de receitas suas criações.

Essa rede tem como foco o público adulto, com idade igual ou superior a 18 anos. E visa fornecer um espaço exclusivo e propício à diálogos sobre o universo sensorial atrelado ao universo culinário, seja por meio da troca de receitas, discussões sobre combinação de ingredientes e afins. 

## **4. Protótipo de Baixa Fidelidade**

<img src="https://github.com/kabianca/social-network/blob/main/readme-prototipo-baixa-fidelidade-mobile.png" alt="Protótipo de Baixa Fidelidade" style="height: 300px;"/>

## **5. Protótipo de Alta Fidelidade e Considerações da Pesquisa UX e UI**

Os feedbacks recebidos após a exibição do protótipo estiveram relacionados especialmente a elementos associados a UI, ou seja, a **apresentação dos elementos**, **fontes** e **contraste** e foram listados no fluxograma abaixo:

<img src="https://github.com/kabianca/social-network/blob/main/readme-feedbacks-ux.png" alt="Organograma com as Melhorias Sugeridas" style="height: 400px;"/>

Após a pesquisa retornamos ao protótipo e iteramos as melhorias sugeridas alcançando o resultado final a seguir:

<img src="https://github.com/kabianca/social-network/blob/main/readme-prototipo-alta-fidelidade-mobile1.png" alt="Protótipo de Alta Fidelidade" style="height: 400px;"/>

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

* 🔴**Desafios:**
  * Implementação da SPA e rotas.
  * Ajuste do background em nossas páginas.
  * Realizar o login com o Firebase.
  * Salvar dados do cadastro.

  
* 🟢**Resolução:**
  * Usamos o ".then" e "hash", conseguindo a navegação entre páginas. 
  * Usamos o mesmo background em todas as páginas, pois trabalhamos com um único "body" no CSS.
  * Seguimos a documentação disponibilizada no Firebase, e conseguimos o login com e-mail/senha e pela conta Google.
  * Usamos o dado (nome) que já tínhamos da autenticação na função updateProfile, imprimindo o nome de usuário na timeline.  
## **7. Fonte das imagens**

- Logo: [Cooking stickers created by Stickers - Flaticon](https://www.flaticon.com/free-stickers/cooking)
- Imagem: [Login Backrground by pickledstardust](https://unsplash.com/photos/4xc6i5BKPWs)
