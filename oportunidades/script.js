const firebaseConfig = {
    apiKey: "AIzaSyD0zjejGmP9fupoSaGYO4jPhjgxKl_RG-A",
    authDomain: "orbita-c42a6.firebaseapp.com",
    projectId: "orbita-c42a6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Botões de filtro


// Renderizador padrão para as oportunidades

const container = document.getElementById("cards");

db.collection("Oportunidades").get().then(snapshot => {

  snapshot.forEach(doc => {
    const data = doc.data();

    container.innerHTML += `
      <div class="card">
        <h3>${data.titulo}</h3>
        <p>${data.descricao}</p>
        <span>${data.categoria}</span>
        <a href="${data.link}" target="_blank"><button>Ver mais</button></a>
      </div>
    `;
  });

});
