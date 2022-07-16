module.exports = function check(str, bracketsConfig) {
  // Формируем массив с парами ковычек
  let arrStartEndBrackets = bracketsConfig.map((subArray) => { // Берем каждый подмасиив bracketsConfig и применяем reduce
    return subArray.reduce((acc, value) => { // Возвращаем результат после каждой иттерации reduce
      return acc + value; // Обьединяем элементы в подмассиве и возвращаем в acc
    }, []);
  });
  // Формируем массив с парами ковычек

  // Проверяем кол-во элементов в строке. Если кол-во нечетное, возвращаем false
  // Если кол-во четное, продолжаем выполнение алгоритма
  if (str.length % 2 == 0) {

    for (let i = 0; i < arrStartEndBrackets.length; i++) {
      console.log(str);
      if (str.includes(arrStartEndBrackets[i])) {
        str = str.replace(arrStartEndBrackets[i], '');
        i = -1; // Сбрасываем i до -1 что бы выполнить скрипт когда в массиве останется одно значение [0]
      }
    }

    return (str) ? false : true;

  } else {
    return false;
  }

}