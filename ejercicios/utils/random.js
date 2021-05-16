function getRandomObject(array) {
  //generamos numero random
  const randomIndex = Math.floor(Math.random() * array.length);

  //guardamos en una variable el objeto escogido, llamando al array
  const object = array[randomIndex];

  return object;
}

//Exportamos el objeto aleatorio
module.exports = { getRandomObject };
