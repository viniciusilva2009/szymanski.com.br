// Header
document.addEventListener("DOMContentLoaded", function () {
  // Fetch o conteúdo do header.html
  fetch('/Includes/header.html')
    .then(response => response.text())
    .then(data => {
      // Inserir o conteúdo no div com id 'header-container'
      document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o header:', error));
});

//Footer
