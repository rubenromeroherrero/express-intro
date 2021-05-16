//console.log("Server File");

//importamos el paquete express
const express = require("express");
const randomObject = require("./utils/random");

//iniciamos el servidor
const server = express();

// Sirve archivos estáticos, el primer parametro es la ruta donde lo va a servir, y el segundo donde se encuentran los archivos estáticos
server.use(express.static("public"));

// server.use("/home", (req, res) => {
//   res.sendFile("public/index.html", { root: __dirname });
// });

//Creamos el array de chistes
const jokes = [
  {
    id: 0,
    joke: "¿asdasdasdasd",
  },
  {
    id: 1,
    joke: "¿Qué le dice un techo a otro? Techo de menos.",
  },
  {
    id: 2,
    joke: "¿Qué es un pez en un cine? Un mero espectador",
  },
  {
    id: 3,
    joke: "Hola, ¿Tienen libros para el cansancio? Sí, pero están agotados",
  },
  {
    id: 4,
    joke: "Soy celíaca. Encantado, yo Antoniaco",
  },
  {
    id: 5,
    joke: "Doctor, doctor, me siento mal. Pues siéntese bien.",
  },
];

//Ejercicio 4--> creamos un endpoint que nos devuelve el chiste que nosotros le indiquemos desde la cabecera
//en la ruta user/numero-id
server.get("/joke/:id", (req, res) => {
  //la constante me va a recoger el valor que pongamos nosotros en la cabecera de la url
  const id = +req.params.id;
  //nos genera un array el .filter--> por eso cogermos sólo la posición 0 del array joke
  const [joke] = jokes.filter((joke) => joke.id === id);
  //El estado de ejecución correcto GET y le enviamos el chiste al
  res.status(200).send(joke);
});

//Ejercicio 5 --> creamos un endpoint que nos devuelve un chiste aleatorio
server.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  const [joke] = jokes.filter((joke) => joke.id === randomNumber);
  //El estado de ejecución correcto GET y le enviamos el chiste al
  res.status(200).send(joke);
});

// El método listen sirve para escuchar el servidor en un puerto determinado.
server.listen(4000);
