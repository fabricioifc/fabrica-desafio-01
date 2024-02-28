# Movies Web App

Esta é uma aplicação web para visualizar filmes populares usando a API do The Movie Database (TMDb). A aplicação permite ao usuário visualizar uma lista de filmes populares e ver detalhes de cada filme, incluindo título, popularidade, sinopse e data de lançamento. Além disso, também oferece a funcionalidade de busca por filmes.

## Tecnologias Utilizadas

- **Frontend**: React.js, React Router, Bootstrap
- **Backend**: Node.js, Express
- **API**: The Movie Database (TMDb)

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na sua máquina
- Conta de API do The Movie Database (TMDb)

### Passos

1. **Clone o repositório:**

git clone git@github.com:vslongo/fabrica-desafio-01.git


2. **Instale as dependências do backend e do frontend:**

cd nome-do-repositorio
cd backend
npm install
cd ../frontend
npm install


3. **Configure a chave da API do TMDb:**

- Renomeie o arquivo `.env.example` para `.env` no diretório `backend`.
- Insira sua chave da API do TMDb no arquivo `.env`.

4. **Execute o backend e o frontend:**

No diretório `backend`, execute:

npm start


No diretório `frontend`, execute:

npm start


5. **Acesse a aplicação no navegador:**

Acesse `http://localhost:3000` no seu navegador.

## Detalhes da Implementação

- A página inicial exibe uma lista de filmes populares, carregados da API do TMDb.
- Cada filme na lista possui um botão "Ver Detalhes" que redireciona para a página de detalhes do filme.
- Na página de detalhes do filme, são exibidas informações adicionais sobre o filme, incluindo título, popularidade, sinopse e data de lançamento.
- A aplicação é responsiva e se adapta a diferentes tamanhos de tela.
- Implementação de uma barra de busca para buscar filmes por título.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.

