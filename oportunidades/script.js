const firebaseConfig = {
    apiKey: "AIzaSyD0zjejGmP9fupoSaGYO4jPhjgxKl_RG-A",
    authDomain: "orbita-c42a6.firebaseapp.com",
    projectId: "orbita-c42a6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Elementos
const container = document.getElementById("cards");
const inputSearch = document.getElementById("searchInput");
const divCategories = document.getElementById("categories");

// Estado dos filtros
let todasOportunidades = [];
let categoriaAtiva = '';
let termoBusca = '';

// Renderizador de oportunidades
function renderOportunidades(lista) {
  container.innerHTML = '';

  lista.forEach(function(op) {
    container.innerHTML += `
      <div class="card">
        <span>${op.categoria}</span>
        <h3>${op.titulo}</h3>
        <p>${op.descricao}</p>
        <a href="${op.link}" target="_blank"><button>Ver mais</button></a>
      </div>
    `;
  });
}

// Busca no Firebase e guarda tudo
db.collection("Oportunidades").get().then(function(snapshot) {
  snapshot.forEach(function(doc) {
    todasOportunidades.push({ id: doc.id, ...doc.data() });
  });

  renderOportunidades(todasOportunidades);
});

// Botões de filtro
divCategories.addEventListener("click", function(evento) {
  const pillClicked = evento.target.closest(".pill");
  if (!pillClicked) return;

  // remove .ativo de todas e adiciona só na clicada
  document.querySelectorAll("#categories .pill").forEach(function(btn) {
    btn.classList.remove("ativo");
  });
  pillClicked.classList.add("ativo");

  categoriaAtiva = pillClicked.dataset.categoria;
  aplicarFiltros();

  console.log("Categoria ativa:", categoriaAtiva);
});

// Busca por título
inputSearch.addEventListener("input", function() {
  termoBusca = inputSearch.value;
  aplicarFiltros();
});

// Filtro
function aplicarFiltros() {
  let resultado = todasOportunidades;

  if (categoriaAtiva !== '') {
    resultado = resultado.filter(function(op) {
      return op.categoria === categoriaAtiva;
    });
  }

  if (termoBusca !== '') {
    resultado = resultado.filter(function(op) {
      return op.titulo.toLowerCase().includes(termoBusca.toLowerCase());
    });
  }

  renderOportunidades(resultado);
}