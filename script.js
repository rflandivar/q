// Cargar los archivos H5P en la página web
const h5pContainer = document.getElementById('h5p-container');

// Función para cargar un archivo H5P
function loadH5P(file) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `h5p/${file}`, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const h5pContent = xhr.responseText;
      h5pContainer.innerHTML = h5pContent;
    }
  };
  xhr.send();
}

// Cargar el archivo H5P seleccionado
loadH5P('example.h5p');