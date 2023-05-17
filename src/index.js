//------------------------------------------------
// EXEMPLO DE FETCH COM GET (FILMES)
// -----------------------------------------------

// Busca o elemento com o ID 'results' no documento HTML.
// Isso será usado mais tarde para exibir os resultados da busca de filmes.
const results = document.getElementById('results')

// Busca o formulário de busca no documento HTML pelo seu ID 'search-form'.
// Isso será usado mais tarde para detectar quando o formulário de busca for submetido.
const searchForm = document.getElementById('search-form')

// Busca o campo de entrada de busca no documento HTML pelo seu ID 'search-input'.
// Isso será usado para obter o valor do texto que o usuário digita no campo de busca.
const searchInput = document.getElementById('search-input')


// Define a função searchMovies, que busca filmes com base em uma consulta.
const searchMovies = (query) => {
  // Define a URL da API que será usada para buscar os filmes.
  const url = `https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`

  // Limpa os resultados anteriores.
  results.innerHTML = ''

  // Usa a função fetch para fazer uma requisição GET na URL da API.
  fetch(url)
    .then(response => response.json()) // Converte a resposta em JSON.
    .then((data) => {
      // Para cada filme na lista de filmes retornada pela API.
      data.Search.forEach((movie) => {
        // Cria um elemento de lista (li) com a imagem do poster do filme.
        const li = `
        <li class='list-inline-item p-3'>
        <img src='${movie.Poster}' width='100px'>
        </li>`

        // Insere o novo elemento de lista no final dos resultados.
        results.insertAdjacentHTML('beforeend', li)
      })
    })
}

// Busca filmes com o nome 'Avengers' quando a página é carregada.
searchMovies('Avengers')

// Adiciona um ouvinte de evento ao formulário de busca que é acionado quando o formulário é submetido.
searchForm.addEventListener('submit', (event) => {
  // Impede que o formulário seja realmente submetido (o que recarregaria a página).
  event.preventDefault()

  // Obtém o nome do filme digitado pelo usuário.
  const movieName = searchInput.value

  // Busca filmes com o nome digitado pelo usuário.
  searchMovies(movieName)
})




//------------------------------------------------
// EXEMPLO DE FETCH COM POST (LOGIN/SENHA)
// -----------------------------------------------

// Define a função signUp, que será chamada quando o evento de submissão do formulário ocorrer.
const signUp = (event) => {
  // Impede o comportamento padrão do evento de submissão do formulário,
  // que é recarregar a página.
  event.preventDefault()

  // Obtém o valor inserido no campo de email.
  const emailValue = document.getElementById("email").value

  // Obtém o valor inserido no campo de senha.
  const passwordValue = document.getElementById("password").value

  // Usa a API Fetch para enviar uma solicitação POST para a URL de registro.
  fetch("https://reqres.in/api/register", {
    method: "POST", // Especifica que a requisição será do tipo POST.
    headers: { "Content-Type": "application/json" }, // Define o tipo de conteúdo do corpo da requisição.
    body: JSON.stringify({ email: emailValue, password: passwordValue }) // Converte o objeto contendo email e senha para uma string JSON.
  })
    .then(response => response.json()) // Converte a resposta em JSON.
    .then((data) => {
      // Imprime os dados retornados pela requisição no console.
      console.log(data)
    })
}

// Busca o formulário no documento pelo seu ID.
const form = document.querySelector("#form")

// Adiciona um ouvinte de evento ao formulário que será acionado quando o formulário for submetido.
// Quando o formulário for submetido, a função signUp acima será chamada.
form.addEventListener("submit", signUp)
