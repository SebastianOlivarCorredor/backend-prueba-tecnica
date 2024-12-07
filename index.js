const cors = require('cors');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3001; 

app.use(cors()); // Habilita CORS
app.use(express.json());

// Leer los elementos del archivo al iniciar el servidor
let elementos = [];
try {
  const data = fs.readFileSync('elementos.json', 'utf8');
  elementos = JSON.parse(data);
} catch (err) {
  console.error("Error al leer el archivo JSON:", err);
  // Si hay un error, `elementos` se queda como un array vacío
}

// Función para guardar los elementos en el archivo JSON
function guardarElementos() {
  const jsonData = JSON.stringify(elementos);
  fs.writeFileSync('elementos.json', jsonData);
}

// Listar todos los elementos
app.get('/elementos', (req, res) => {
  res.json(elementos); 
});

// Listar un elemento por su nombre
app.get('/elementos/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const elemento = elementos.find(e => e.nombre === nombre);
  if (elemento) {
    res.json(elemento);
  } else {
    res.status(404).json({ mensaje: 'Elemento no encontrado' });
  }
});

// Agregar un nuevo elemento
app.post('/elementos', (req, res) => {
  const nuevoElemento = req.body;
  elementos.push(nuevoElemento);
  guardarElementos(); // Llamada a la función guardarElementos()
  res.status(201).json(nuevoElemento);
});

// Actualizar un elemento existente
app.put('/elementos/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const elementoActualizado = req.body;
  const index = elementos.findIndex(e => e.nombre === nombre);
  if (index !== -1) {
    elementos[index] = elementoActualizado;
    guardarElementos(); // Llamada a la función guardarElementos()
    res.json(elementoActualizado);
  } else {
    res.status(404).json({ mensaje: 'Elemento no encontrado' });
  }
});

// Eliminar un elemento
app.delete('/elementos/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  elementos = elementos.filter(e => e.nombre !== nombre);
  guardarElementos(); // Llamada a la función guardarElementos()
  res.json({ mensaje: 'Elemento eliminado' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});