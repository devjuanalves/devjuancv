const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// Inicializa o Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBMGYk6rYP4eyw4sgHR4zOj3F30DeI1cgo",
    authDomain: "portfolio-devjuan.firebaseapp.com",
    databaseURL: "https://portfolio-devjuan-default-rtdb.firebaseio.com",
    projectId: "portfolio-devjuan",
    storageBucket: "portfolio-devjuan.appspot.com",
    messagingSenderId: "478962797681",
    appId: "1:478962797681:web:18ecf04b5376f6b71d1fd0",
    measurementId: "G-VZN4KPVN1E"
  };
  
  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Inicializa o Realtime Database
  const database = firebase.database();
  
  // Função para salvar os dados
function saveData(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os valores do formulário
    const nome = document.querySelector('input[placeholder="Nome"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;

    // Gera uma chave única para cada visitante usando o email
    const userId = email.replace('.', '_');  // Firebase não aceita pontos nas chaves

    // Salva os dados no Realtime Database
    firebase.database().ref('visitantes/' + userId).set({
        nome: nome,
        email: email,
        timestamp: new Date().toISOString()
    })
    .then(() => {
        console.log("Dados salvos com sucesso!");
        alert("Seus dados foram salvos! Redirecionando...");
        window.location.href = "page.html";  // Redireciona após salvar
    })
    .catch((error) => {
        console.error("Erro ao salvar os dados: ", error);
        alert("Ocorreu um erro ao salvar seus dados.");
    });
}

