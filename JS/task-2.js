const calculateEngravingPrice = function(message, pricePerWord) {
 const messageLength = message.split(' ').length; 
 // можно было не делать переменную, а записать const costEngraving = pricePerWord * message.split(' ').length;
 // но я подумал, так понятней :)
 const costEngraving = pricePerWord * messageLength;
 return costEngraving;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120