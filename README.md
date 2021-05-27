https://docs.google.com/document/d/1VrONNKiq0VvoRVJ7p_Fi3gFBaPv3KsJNus3MnahxyDk/edit

### Cliente
- Recebe link /Nome/registrar params query => GET
- Parâmetros a receber
	- Nome* | 100 validação caracteres
	- Email* | 100 validação caracteres obrigatório
	- CPF* | validação 14 caracteres
	- Celular | mascara de telefone
	- Conhecimentos []

**Validação no Front**
Apenas 1 CPF registrado 

### Admin
- Salvar em Banco de dados
- Listar no endereço: http://localhost/registros em ordem alfabética
- Status: Não validado e Validado
- Clicando no registro : http://localhost/NOMEDOCOLABORADOR/validar onde será validado clicando no botão
- Validando clicando no botão, muda para validado e salva a hora da validação

Administrador deve pesquisar 

## Back-end 

### Recebendo Dados

- Receber de: **http://localhost/NOMEDOCOLABORADOR/registrar  **
	- Nome: String | Obrigatório
	- Email: String | Obrigatório 
	- CPF: String | Obrigatório
	- Celular: String
	- Conhecimentos: Lista | Obrigatório
- Validar CPF
- Validar e-mail
- Cadastrar no Banco de Dados

### Banco de Dados
name: string
email: string
cpf: string
cell: string
skills: list[]
validation: boolean
validatedAt: date

### Listando os Registros
- Enviando Para: **http://localhost/registros**
	- [name, email, cpf, cell, skills, validation]

### Validando Registros
- Recebendo de: **http://localhost/NOMEDOCOLABORADOR/validar**
	- [validation]
	- Ao fazer validação deve ser alterado o `validatedAt` para a hora atual
