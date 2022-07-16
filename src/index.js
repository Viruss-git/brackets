/*module.exports = */
function check(str, bracketsConfig) {
  // Формируем массив с парами ковычек
  let arrStartEndBrackets = bracketsConfig.map((subArray) => { // Берем каждый подмасиив bracketsConfig и применяем reduce
    return subArray.reduce((acc, value) => { // Возвращаем результат после каждой иттерации reduce
      return acc + value; // Обьединяем элементы в подмассиве и возвращаем в acc
    }, []);
  });
  // Формируем массив с парами ковычек

  console.log(arrStartEndBrackets);

}

let bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];
console.log(check('()()()()][', bracketsConfig));