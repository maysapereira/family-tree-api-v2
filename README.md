
<br />
<p align="center">
  <h1 align="center">FAMILY TREE VERSÃO 2</h1>
 <br />
  <p align="center">SUMÁRIO<p align="center">
  <a href="#sobre-a-aplicação"> Sobre </a> |
  <a href="#ferramentas-utilizadas">Ferramentas utilizadas</a> |
  <a href="#dependências"> Dependências </a> |
  <a href="#inicialização-da-aplicação"> Inicialização </a> |
  <a href="#rotas-da-aplicação"> Rotas</a>
       <br />
    <br />
  </p>
</p>

# Sobre a aplicação:

Projeto realizado como teste técnico para a vaga de *Desenvolvedor Back-end Junior*, para a empresa **Pagar.me**. O objetivo era criar uma API de uma árvore genealógica, que retorna as relações de parentesco um certo indivíduo contendo todos os ascendentes possíveis até o seu nível. Essa é a versão final da aplicação e você pode ver sua versão de teste criada com bando de dados relacional clicando [aqui](https://github.com/maysapereira/family-tree-api-v1)

# Ferramentas utilizadas:

Para o desenvolvimento foi utilizado **JavaScript** com **NodeJS** como linguagem da aplicação e o **Express** como framework. Como banco de dados foi utilizado o **MongoDB**.

O editor de código utilizado foi o **VSCode Studio** e para testes durante o desenvolvimento foram utilizadas o framework **nodemon** e o API Design Tool **Insomnia**

# Dependências

```.json
"dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "moongose": "^1.0.0"
  }
 ```
 
As dependências podem ser encontradas [neste arquivo](https://github.com/maysapereira/family-tree-api-v2/blob/main/package.json) e para instalar basta rodar o comando abaixo e colar no terminal. Isso criará um clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/maysapereira/family-tree-api-v2.git && cd family-tree-api-v2 && npm install
```

# Dependências de desenvolvimento

As dependências de desenvolvimento podem ser encontradas [neste arquivo](https://github.com/maysapereira/family-tree-api-v2/blob/main/package.json). Caso deseje instala-las rode o comando abaixo e cole no terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev nodemon
```

# Inicialização da aplicação:

Para iniciar a aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

# Rotas da aplicação:

Rotas da coleção *Members*

**[GET]** /members - A rota exibirá todos familiares cadastrados <br>
**[GET]** /members/:id - Busca apenas um familiar baseado em seu ID  <br>
**[POST]** /members - A rota cria um novo familiar com base nas informações passadas no corpo da requisição. <br>

**Observação:** o id é criado automaticamente com a ajuda do MongoDB <br>

**[PUT]** /members/:id - A rota atualizará os dados de um familiar com as informações passadas no corpo da requisição <br>
**[DELETE]** /members/:id - A rota deletará um familiar baseado em seu ID.

Rotas da coleção *Relationship*

**[GET]** /relationships - A rota exibirá todos os relacionamentos cadastrados <br>
**[GET]** /relationships/:id - Busca apenas um relacionamento baseado em seu ID  <br>
**[POST]** /relationships - A rota cria um novo relacionamento com base nas informações passadas no corpo da requisição. <br>
**[PUT]** /relationships/:id - A rota atualizará os dados de um relacionamento com as informações passadas no corpo da requisição <br>
**[DELETE]** /relationships/:id - A rota deletará um relacionamento baseado em seu ID.
