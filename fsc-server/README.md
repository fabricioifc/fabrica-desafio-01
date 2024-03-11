# Desafio Fábrica de Software
## API com Rust (TMDB API<->Server)

Como iniciante em Rust e tempo limitado, não tornei a chave da API algo seguro na aplicação usando talves _enviroments variables(.env*)_ e também a rota possui seu endpoint sem nenhum bloqueio.
Em resumo, esse projeto é um experiência divertida de se fazer por ter uma rápida entrega de experiência ao visualizar as imagens dos filmes e navegar em um mar de possibilidades.

O uso da linguagem Rust foi inteiramente por experimentação da linguagem que tinha conhecimento de sua existênca, mas não a tinha usado antes. Meu primeiro ``hello world`` seguido de consumo de API.

## Para iniciar
**Requisito:** é necessário ter o rust instalado na máquina e rodar o comando abaixo.
``
cargo run
``
E depois vai rodar no endereço: <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>

**Exemplo do arquivo** `main.rs`:

```rs
// importa o rocket, lib para criação da API
#[macro_use] extern crate rocket;

// instancia o modulo dentro de use_cases (conceito de inicio de entrocamento)
mod use_cases; 

/* método get 'coringa'. Nesse caso, como não há nenhuma inserção e apenas um tipo simples de requisição apenas com filmes e categorias top rated e popular */
use use_cases::fetch::get as index;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
        // .mount("/popular", routes![gpopular]) // adicionando mais rotas ou subrotas
}
```