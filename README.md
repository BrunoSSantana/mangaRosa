<p align="center">
    <img alt="" src="./mangaRosa.png"/>
</p>


<p align="center">
   <img src="https://img.shields.io/github/repo-size/BrunoSSantana/MangaRosa?style=for-the-badge">
   <img src="https://img.shields.io/github/languages/count/BrunoSSantana/MangaRosa?style=for-the-badge">
   <img src="https://img.shields.io/github/forks/BrunoSSantana/MangaRosa?style=for-the-badge">
   <img src="https://img.shields.io/bitbucket/issues/BrunoSSantana/MangaRosa?style=for-the-badge">
   <img src="https://img.shields.io/bitbucket/pr-raw/BrunoSSantana/MangaRosa?style=for-the-badge">
</p>

<p align="center">
 <a href="#overview">Overview</a> •
 <a href="#getting-started">Getting Started</a> •
 <a href="#routes">Routes</a> •
 <a href="#author">Author</a> • 
 <a href="#license">License</a> • 
 <a href="#acknowledgements">Acknowledgements</a>
</p>

## Overview

*Este projeto foi construindono intuito de ajudar o setor de RH da empresa (_fictícia_) Manga Rosa a realizarem o cadastro dos seus novos colaboradores*

**Etapas do Cadastro**

- Colaborador (*User*) recebe formulário e envia ||View Form
- RH (*Admin*) visualiza a lista dos novos colaboradores || View List
- RH Seleciona colaborador || View User
- RH Valida Colaborador || View User



## Getting Started

Para instalar esse projeto localmente, é necessário que você possua as seguinte ferramentas em sua máquina.

- <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />

- <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/BrunoSSantana/MangaRosa.git
   ```
2. Install YARN packages
   ```sh
   yarn
   ```
3. Start o Postgres
   ```sh
    sudo systemctl start postgresql
   ```
4. Criar Tabela

## Routes


<details>
  <summary><strong>USER</strong></summary>


**POST/**

http://localhost:3333/registrar
> Register User

O que se espera ser enviado para o servidor nesta rota:
```JSON
{
	"name": "Colaborador da Manga Rosa",
	"email": "colaborador@somosmanga.com",
	"cpf": "99999999999",
	"cell": "99999999999",
	"skills": ["Typescript", "React", "NodeJS"]
}
```
*Sendo o celular opicional

Validações:
- Nome de no máximo 100 caracteres
- Email de no máximo 100 caracteres
- Email deve ser válido
- CPF deve ser único
- CPF deve ser válido
- Cell de no máximo 14 caracteres
- No mínimo uma Skill e no máximo três
</details>

<details>
  <summary><strong>ADMIN</strong></summary>


**GET**
http://localhost:3333/registros
> List all Users

O que se espera ser recebido do servidor nesta rota:
```JSON
[
  {
    "id": 01,
    "name": "Colaborador da Manga Rosa",
    "email": "colaborador@somosmanga.com",
    "cpf": "99999999999",
    "cell": "99999999999",
    "skills": "{\"Typescript\",\"React\", \"NodeJS\"}",
    "validate": false,
    "validatedat": ""
  },
  {
    "id": 02,
    "name": "Eduardo Manga Rosa",
    "email": "eduardomangarosa@somosmanga.com",
    "cpf": "88888888888",
    "cell": "88888888888",
    "skills": "{\"NodeJS\"}",
    "validate": false,
    "validatedat": ""
  },
  {
    "id": 03,
    "name": "Sandro Manga Rosa",
    "email": "sandromangarosa@somosmanga.com",
    "cpf": "77777777777",
    "cell": "77777777777",
    "skills": "{\"React\",\"Git\"}",
    "validate": false,
    "validatedat": ""
  }
]
```

**GET**
http://localhost:3333/registros
> List User

O que se espera ser recebido do servidor nesta rota:
```JSON
{
  "id": 01,
  "name": "Colaborador da Manga Rosa",
  "email": "colaborador@somosmanga.com",
  "cpf": "99999999999",
  "cell": "99999999999",
  "skills": "{\"Typescript\",\"React\", \"NodeJS\"}",
  "validate": false,
  "validatedat": ""
}
```

**PUT**
http://localhost:3333/registros
> Validate User

O que se espera ser recebido do servidor nesta rota:
```JSON
{
  "message": "User Updated Successfully"
}
```
</details>



## Author
<a href="https://github.com/BrunoSSantana/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61945340?s=400&u=882004ebbccf5ae04e55fe4b27a5e704c3a95bab&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Bruno Santana</b></sub></a> <a href="https://github.com/BrunoSSantana/" title="Rocketseat">🚀</a>

Feito com :purple_heart: por Bruno Santana 👋🏽




## License

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

## Acknowledgements

* [Img Shields](https://shields.io)
* [README Template - iuricode](https://github.com/iuricode/README-template/)
* [Best README template - othneildrew](https://github.com/othneildrew/Best-README-Template/)
* [Marvel Heroes - willmorim](https://github.com/willmorim/marvel-heroes)

[⬆ Voltar ao topo](#nome-do-projeto)<br>


<h4 align="center"> 
	🚧 🚀 Em construção... 🚧
</h4>