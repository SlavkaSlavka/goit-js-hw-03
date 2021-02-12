//Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
let longestWord;

const findLongestWord = function(string) {
  const normalizeString  = string.toLowerCase().split(' '); 
  longestWord = normalizeString[0];
for (let i = 1; i < normalizeString.length; i+=1) {
  const word = normalizeString[i];
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'