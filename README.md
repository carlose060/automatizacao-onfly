# Automatização Onfly

## Detalhes


**Objetivo:**
 - [x] Automatizar o preenchimento de um formulário HTML complexo com dados fictícios e realistas.
 - [x] Alterar todos os texto dos elementos &lt;p&gt; de uma página HTML.

**Habilidades necessárias:**
 - [x] Identificar e manipular elementos HTML da página: Ser capaz de encontrar os campos para inserção de dados e campos de textos para manipulá-los
 - [x] Validação dos dados: Validar o email por meio de expressões regulares.
 - [x] Conseguir dados realistas: Fazer uma comunicação com uma API para fornecer os dados realistas e aleatórios. 

## ⭐ Resolvendo o problema
O Primeiro passo é conseguir consumir os dados de uma API, e para isso utilizo uma requisição HTTP com `fetch`. Com isso, utilizo algumas expressões regulares para validar os campos de CEP, telefone e cartão, devido ao fato da API não ser com dados fictícios Brasileiros, além disso, utilizo também uma expressão regular para validar o email, que foi proposto no desafio.
Quando todos os dados estão devidamente tratados, utilizo a biblioteca Selenium no JavaScript para preencher e enviar o formulário. Utilizo um fluxo com `Try e Catch` de forma que, caso aconteça algum erro inesperado na primeira tentativa de execução, o programa executa novamente. Para encontrar todos os campos e botões necessários para preencher e enviar o formulário, utilizo o método `findElement()` e procuro os elementos pelo seu Xpath.
Para a segunda tarefa, após localizar todos os elementos utilizando o método `findElements()`, é necessário executar um script no navegador para alterar todos os campos, o atributo `innetText` é o responsável por alterar o campo de texto visível.


**Observações:**
Visando a organização e modularização foi criado dois arquivos de extensão .js auxiliares `api.js` e `utilitarios.js` e um arquivo para cada tarefa `tarefa01.js` e `tarefa02.js`, além disso um arquivo json com configurações de ambiente `config.json`.


- `api.js` contém o trecho de código necessário para comunicação com a API e tratamento dos dados.
- `utilitarios.js` contém todas as expressões regulares usadas para validar os dados e uma função de `sleep()` para pausa o programa por alguns segundos.
- `tarefa01.js` e `tarefa02.js` os respectivos desafios propostos.
- `config.json` arquivo auxiliar trazendo informações sensíveis, como urls, API e tokens.



## 💻 Pré-requisitos


- Necessário `node v18 ou superior`
- Bibliotecas necessárias `selenium-webdriver e geckodriver`.


## 🚀 Instalando automatizacao-onfly

Para instalar o automatizacao-onfly, siga estas etapas:

**1. Clone o projeto:**
```bash
git clone https://github.com/carlose060/automatizacao-onfly.git
```
Isso irá criar uma nova pasta chamada `automatizacao-onfly` no seu diretório atual, com todos os arquivos do repositório.

**2. Instalar dependências:**

Navegue até a pasta do projeto com: 

```bash
cd automatizacao-onfly 
```
Execute a instalação das dependências:

```bash
npm install
```

## ☕ Executando automatizacao-onfly

Para executar automatizacao-onfly, siga estas etapas:

```bash
node src/tarefa01.js 
node src/tarefa01.js 
```