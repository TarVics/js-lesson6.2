consolex.header(`1. Клонирование массива

Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
    function arrayClone(arr) {
        // Ваш код
    }
    let arr1 = arrayClone(vegetables);
    document.writeln(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']`
);
{
    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

    function arrayClone1(arr) {
        return [...arr]
    }

    function arrayClone2(arr) {
        return Array.from(arr);
    }

    function arrayClone3(arr) {
        return arr.slice(0);
    }

    let arr1 = arrayClone1(vegetables);
    consolex.log(arr1, arr1 !== vegetables); // ['Капуста', 'Репа', 'Редиска', 'Морковка']`
    let arr2 = arrayClone2(vegetables);
    consolex.log(arr2, arr2 !== vegetables); // ['Капуста', 'Репа', 'Редиска', 'Морковка']`
    let arr3 = arrayClone3(vegetables);
    consolex.log(arr3, arr3 !== vegetables); // ['Капуста', 'Репа', 'Редиска', 'Морковка']`

}
/********************************************************************/
consolex.header(`2. Преобразование массива в строку

Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
Элементы массива будут разделены запятой. Получите результат двумя разными методами.

    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
    // Ваш код
    document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
    document.writeln(str2); // "Капуста, Репа, Редиска, Морковка"`
);
{
    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

    let str1 = vegetables.join(',');
    let str2 = vegetables.reduce((acc, val) => acc + ',' + val);

    consolex.log('1. %S', str1); // "Капуста, Репа, Редиска, Морковка"
    consolex.log('2. %S', str2); // "Капуста, Репа, Редиска, Морковка"`
}
/********************************************************************/
consolex.header(`3. Двоеточие между нечётными числами

Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает 
число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

    const num = prompt('Введите число', 55);
    function colonOdd (num) {
        // Ваш код
    }
    document.writeln(colonOdd(num)); // 5:5`
);
{
    const num = 55639217; // Math.round(10000000 + Math.random() * (99999999 - 10000000));
    consolex.log('Маємо число %D', num);

    function colonOdd(num) {
        let nums = '' + num;
        let res = '';
        for (let i = 0; i < nums.length; i++) {
            let num1 = nums[i];
            res += num1 + (num1 % 2 && nums[i + 1] % 2 ? ':' : '')
        }
        return res;
    }

    function colonOdd2(num) {
        let arr = ('' + num).split('');
        return arr.reduce((acc, val) => acc + (+acc[acc.length - 1] % 2 && val % 2 ? ':' : '') + val);
    }

    consolex.log('1. %S', colonOdd(num));
    consolex.log('2. %S', colonOdd2(num));
}
/********************************************************************/
consolex.header(`4. Замена регистра символов

Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в 
качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится 
«КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].

    const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
    function changeRegister (str) {
        // Ваш код
    }
    document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк]`
);
{
    // const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
    const str = 'КаЖдЫй ОхОтНиК';

    function changeRegister(str) {
        let lowerStr = str.toLowerCase();
        let upperStr = str.toUpperCase();
        let res = '';
        for (let i = 0; i < str.length; i++) {
            res += (str[i] === lowerStr[i]) ? upperStr[i] : lowerStr[i];
        }
        return res;
    }

    function changeRegister2(str) {
        let lowerStr = str.toLowerCase();
        let upperStr = str.toUpperCase();
        return str.split('').reduce((acc, char, index) =>
            acc + ((char === lowerStr[index]) ? upperStr[index] : lowerStr[index]));
    }

    consolex.log('1. %S', str); // [кАжДыЙ оХоТнИк]`
    consolex.log(' - %S', changeRegister(str)); // [кАжДыЙ оХоТнИк]`
    consolex.log('2. %S', str); // [кАжДыЙ оХоТнИк]`
    consolex.log(' - %S', changeRegister2(str)); // [кАжДыЙ оХоТнИк]`
}
/********************************************************************/
consolex.header(`5. Удалить повторяющиеся элементы массива

Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся 
элементы из массива arr (игнорируйте чувствительность к регистру).

    let arr = ["php", "php", "css", "css",
        "script", "script", "html", "html", "java"
    ];
    function removeDuplicates(arr) {
        // Ваш код
    }
    document.writeln(result);  // [php,css,script,html,java]`
);
{
    let arr = ["php", "php", "css", "css",
        "script", "script", "html", "html", "java"
    ];

    function removeDuplicates(arr) {
        return Object.keys(arr.reduce((acc, val) => acc[val] = val && acc, {}));
    }

    function removeDuplicates2(arr) {
        return arr.reduce((acc, val) => acc.includes(val) ? acc : acc.push(val) && acc, [])
    }

    let result = removeDuplicates(arr);
    consolex.log(result);  // [php,css,script,html,java]

    let result2 = removeDuplicates2(arr);
    consolex.log(result2);  // [php,css,script,html,java]

}
/********************************************************************/
consolex.header(`6. Найдите високосные годы

Високосным годом является каждый четвертый год и века начинаются только на высокостные года, 
отличие високосного года от обычного заключается в появлении 366-го дня. 
Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон 
лет и возвращает массив високосных лет в заданном диапазоне.

    function chooseYears(start, end) {
    // Ваш код
    }
    document.writeln(chooseYears(2000,2018)); // [2000,2004,2008,2012,2016]`
);
{
    function chooseYears(start, end) {
        const res = [];
        for (let year = start; year <= end; year++) {
            if (year % 4 === 0) {
                res.push(year);
            }
        }
        return res;
    }

    consolex.log(chooseYears(2000, 2018)); // [2000,2004,2008,2012,2016]
}
/********************************************************************/
consolex.header(`7. Отобразить элементы в случайном порядоке

Используя метод sort перепишите предсталенный ниже код, 
который с помощью цикла for случайно изменяет порядок расстановки элементов массива.

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
        }
    let array = [0,1,2,3,4,5,6,7,8,9];
    document.writeln(shuffle(array));`
);
{
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    function shuffle2(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }

    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    consolex.log(shuffle(array));
    let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    consolex.log(shuffle2(array2));
}
/********************************************************************/
consolex.header(`8. Получить первые элементы массива

Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.

    let array = [1,2,3,4,5,6,7,8,9];
    function getFirst(array, n) {
        ваш код
    };
    document.writeln(getFirst(array));    // 1
    document.writeln(getFirst(array, 4)); // 1,2,3,4
    document.writeln(getFirst(array,-3)); // 1,2,3,4,5,6`
);
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getFirst(array, n = 1) {
        return array.slice(0, n);
    }
    consolex.log(getFirst(array));      // 1
    consolex.log(getFirst(array, 4)); // 1,2,3,4
    consolex.log(getFirst(array, -3)); // 1,2,3,4,5,6`
}
/********************************************************************/
consolex.header(`9. Получить последние элементы массива

Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.

    let array = [1,2,3,4,5,6,7,8,9];
    function getLast(array, n) {
        ваш код
    };
    document.writeln(getLast(array));     // 9
    document.writeln(getLast(array, 4));  // 6,7,8,9
    document.writeln(getLast(array, 12)); // 1,2,3,4,5,6,7,8,9`
);
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getLast(array, n = 1) {
        return array.slice(-n);
    }
    consolex.log(getLast(array));       // 9
    consolex.log(getLast(array, 4));  // 6,7,8,9
    consolex.log(getLast(array, 12)); // 1,2,3,4,5,6,7,8,9`
}
/********************************************************************/
consolex.header(`10. Сумма элементов двух массивов

Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6];
    ваш код
    document.writeln(arr3); // [5,7,9,4,5]`
);
{
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6];

    let arr3 = new Array(Math.max(arr1.length, arr2.length)).fill(0);
    arr1.forEach((value, index) => arr3[index] += value);
    arr2.forEach((value, index) => arr3[index] += value);
    consolex.log(arr3); // [5,7,9,4,5]
}
/********************************************************************/
consolex.header(`11. Количество повторяющихся элементов в массиве

Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

    function countIdentic(arr) {
        ваш код
    }
    countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) // 4
    countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3`
);
{
    function countIdentic(arr) {
        let res = arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1) && acc, {});
        return Object.values(res).filter(value => value > 1).length;
    }

    consolex.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])); // 4
    consolex.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9])); // 3
}
/********************************************************************/
consolex.header(`12. Разворачивание массива массивов

Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

    let arr1 = [1, [2,[3,[4]]]];
    let arr2 = [1, [2], [3, [[4]]],[5,6]];
    function expand(arr) {
        ваш код
    }
    document.writeln(expand(arr1)); // 1,2,3,4
    document.writeln(expand(arr2)); // 1,2,3,4,5,6`
);
{
    let arr1 = [1, [2, [3, [4]]]];
    let arr2 = [1, [2], [3, [[4]]], [5, 6]];
    let arr3 = [[[[1, 2, 3]]], [[[4, 5, 6]]]];

    function expand(arr) {
        let hasArray = true;
        while (hasArray) {
            hasArray = false;
            arr = arr.reduce((acc, val) => {
                hasArray = hasArray || Array.isArray(val);
                return acc.concat(val);
            }, []);
        }
        return arr;
    }

    consolex.log(expand(arr1)); // 1,2,3,4
    consolex.log(expand(arr2)); // 1,2,3,4,5,6
    consolex.log(expand(arr3)); // 1,2,3,4,5,6

    consolex.log(arr1.flat(10)); // 1,2,3,4
    consolex.log(arr2.flat(10)); // 1,2,3,4,5,6
    consolex.log(arr3.flat(10)); // 1,2,3,4,5,6

}
/********************************************************************/
consolex.header(`13. Объединить два массива без дублирования элементов

Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.

    let array1 = [5, 2, 1, -10, 8];
    let array2 = [5, 2, 1, -9, 3, 7];
    let union = function(array1, array2) {
        ваш код
    }
    document.writeln(union(array1, array2)); // [-10,8,5,2,1,-9,3,7]`
);
{
    let array1 = [5, 2, 1, -10, 8];
    let array2 = [5, 2, 1, -9, 3, 7];
    let union = function (array1, array2) {
        let res = array1.reduce((acc, val) => acc.includes(val) ? acc : acc.push(val) && acc, []);
        return array2.reduce((acc, val) => acc.includes(val) ? acc : acc.push(val) && acc, res);
    }
    let union2 = function (array1, array2) {
        let res = array1.reduce((acc, val) => (acc[val] = val) && acc, {});
        res = array2.reduce((acc, val) => (acc[val] = val) && acc, res);
        return Object.values(res);
    }
    consolex.log(union(array1, array2)); // [-10,8,5,2,1,-9,3,7]`
    consolex.log(union2(array1, array2)); // [-10,8,5,2,1,-9,3,7]`
}
/********************************************************************/
consolex.header(`14. Разница между двумя массивами

Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2 и наоборот.

    let arr1 = [1, 2, 'a'];
    let arr2 = [1, 2, 3, 4, 'b'];
    function arrayDiff(arr1, arr2) {
        ваш код
    }
    document.writeln(arrayDiff(arr1, arr2)); // [a,3,4,b]`
);
{
    let arr1 = [1, 2, 'a'];
    let arr2 = [1, 2, 3, 4, 'b'];

    function arrayDiff(arr1, arr2) {
        let res = [];
        arr1.forEach(value => arr2.includes(value) || res.push(value));
        arr2.forEach(value => arr1.includes(value) || res.push(value));
        return res;
    }

    consolex.log(arrayDiff(arr1, arr2)); // [a,3,4,b]`
}
/********************************************************************/
consolex.header(`15. Сортировка массива по убыванию

Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

    let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
    function compareNumbers(arr){
        ваш код
    }
    compareNumbers(numbers); // -4,1,2,3,3,5,6,7,8`
);
{
    let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

    function compareNumbers(arr) {
        arr.sort((a, b) => b - a);
    }

    compareNumbers(numbers); // -4,1,2,3,3,5,6,7,8 !!!!!!!! - В умові сказано "по убыванию их значений". Більше -> менше
    consolex.log(numbers);
}
/********************************************************************/
consolex.header(`16. Наиболее часто используемый элемент массива

Напишите код, который находит наиболее часто используемый элемент массива.

    let arr1=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
    ваш код
    document.writeln(output); // z повторяется 5 раз`
);
{
    let arr1 = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
    let obj = arr1.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1) && acc, {});
    let output = Object.entries(obj).reduce((acc, val) => acc[1] < val[1] ? val : acc);
    consolex.log(output); // z повторяется 5 раз`
}
/********************************************************************/
consolex.header(`17. Сумма квадратов значений массива

Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

    function sumOfSquares(arr) {
    ...ваш код...
    }
    document.writeln(sumOfSquares([1, 2, 3, 4, 5])); // 55`
);
{
    function sumOfSquares(arr) {
        return arr.reduce((acc, val) => acc + val ** 2, 0);
    }

    consolex.log(sumOfSquares([1, 2, 3, 4, 5])); // 55
}
/********************************************************************/
consolex.header(`18. Сумма и произведение значений массива

Напишите код, который определяет сумму и произведение значений массива.

    let arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];
    ...ваш код...
    document.writeln(" Сумма : "+sum + "Произведение : " + product); /* Сумма : 45
                                             Произведение : 362880 */`
);
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = arr.reduce((acc, val) => acc + val);
    let product = arr.reduce((acc, val) => acc * val);
    consolex.log(" Сумма: " + sum + "; Произведение: " + product); /* Сумма : 45
                                             Произведение : 362880 */
}
/********************************************************************/
consolex.header(`19. Удаление ложных значений из массива

Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: 
false, null, undefined, 0, –0, NaN и "" (пустя строка).

    array = [NaN, 0, 77, false, -17, '',undefined, 99, null];
    function filterFalse(arr) {
    ...ваш код...
    }
    document.writeln(filterFalse(array)); // [ 77, -17, 99 ]`
);
{
    array = [NaN, 0, 77, false, -17, '', undefined, 99, null];

    function filterFalse(arr) {
        return arr.filter(val => val);
    }

    consolex.log(filterFalse(array)); // [ 77, -17, 99 ]
}
/********************************************************************/
consolex.header(`20. Сортировка массива объектов

Напишите код, который отсортирует массив объектов litmir по значению свойства title.

    let litmir = [
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
    ];
    ...ваш код...
    // Восстание Аркан Золотая лилия Улетела сказка`
);
{
    let litmir = [
        {author: 'Хэленка', title: 'Улетела сказка'},
        {author: 'Коул Кресли', title: 'Восстание Аркан'},
        {author: 'Райчел Мид', title: 'Золотая лилия'}
    ];

    litmir.sort((a, b) =>
        (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0);

    consolex.log(litmir);
    // Восстание Аркан Золотая лилия Улетела сказка
}
/********************************************************************/
consolex.header(`21. Найти пары чисел, сумма которых равна заданному значению

Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, 
сумма которых равна заданному значению.

    let num = 5;
    let arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
    function findCouple(array, number) {
    ...ваш код...
    }
    document.writeln(findCouple(arr, num));
    // Ваша пара чисел: 1 + 4,Ваша пара чисел: 2 + 3`
);
{
    let num = 5;
    let arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

    function findCouple(array, number) {
        let res = {};
        for (let i = 0; i < array.length - 1; i++) {
            let val1 = array[i];
            for (let j = i + 1; j < array.length; j++) {
                let val2 = array[j];
                if (val1 + val2 === number) {
                    if (val1 > val2) [val2, val1] = [val1, val2];
                    res[val1 + ':' + val2] = [val1, val2];
                }
            }
        }
        return Object.values(res).map(val => 'Ваша пара чисел: ' + val[0] + ' + ' + val[1]).join(', ');
    }

    consolex.log(findCouple(arr, num));
    // Ваша пара чисел: 1 + 4, Ваша пара чисел: 2 + 3
}
/********************************************************************/
consolex.header(`22. Найти все значения данного свойства в массиве объектов

Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов 
массив объектов и имя свойства, а затем возвращает все значения данного свойства из массива объектов.

    let litmir = [
        { author: 'Хэленка', title: 'Улетела сказка'},
        { author: 'Коул Кресли', title: 'Восстание Аркан'},
        { author: 'Райчел Мид', title: 'Золотая лилия'}
    ];
    function propertyValue(array, key) {
    ...ваш код...
    }
    propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
    propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид`
);
{
    let litmir = [
        {author: 'Хэленка', title: 'Улетела сказка'},
        {author: 'Коул Кресли', title: 'Восстание Аркан'},
        {author: 'Райчел Мид', title: 'Золотая лилия'}
    ];

    function propertyValue(array, key) {
        consolex.log(array.map(val => val[key]).join(', '));
    }

    propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
    propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид`
}
/********************************************************************/
consolex.header(`23. Общая стартовая подстрока в массиве строк

Напишите функцию startingSubstring(arr), которая возвращает общую начальную подстроку в массиве строк.

    let arr1 = ['Капуста', 'Капитал'];
    let arr2 = ['Репа', 'Редиска'];
    function startingSubstring(arr) {
        // Ваш код
    }
    let res1 = startingSubstring(arr1);
    let res2 = startingSubstring(arr2);
    document.writeln(res1); // Кап
    document.writeln(res2); // Ре`
);
{
    let arr1 = ['Капуста', 'Капитал'];
    let arr2 = ['Репа', 'Редиска'];

    function startingSubstring(arr) {
        let firstEl = arr[0];
        let commonSize = 0;
        while (commonSize < firstEl.length) {
            let index = 1;
            while (index < arr.length && arr[index][commonSize] === firstEl[commonSize]) index++;
            if (index < arr.length) break;
            commonSize++;
        }
        return firstEl.substring(0, commonSize);
    }

    let res1 = startingSubstring(arr1);
    let res2 = startingSubstring(arr2);
    consolex.log(res1); // Кап
    consolex.log(res2); // Ре
}
/********************************************************************/
consolex.header(`24. Удалить определенный элемент из массива

Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.

    function removeItem(arr, num) {
        // Ваш код
    }
    document.writeln(removeItem([3, 5, 7, 8, 5], 5)); // [3,7,8]`
);
{
    function removeItem(arr, num) {
        arr.splice(num - 1, 1);
        return arr;
    }
    function removeItem2(arr, num) {
        return arr.slice(0, num - 1);
    }
    consolex.log(removeItem([3, 5, 7, 8, 5], 5)); // [3,7,8]
    consolex.log(removeItem2([3, 5, 7, 8, 5], 5)); // [3,7,8]
}
/********************************************************************/
consolex.header(`25. Вернуть случайный элемент из массива

Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива.

    function randomElement(arr) {
        // Ваш код
    }
    let arr = [24, 45, 22, 35, 43];
    document.writeln(randomElement(arr)); // 22`
);
{
    function randomElement(arr) {
        let index = Math.round(Math.random() * arr.length);
        consolex.log(arr);
        consolex.log('Index %D', index);
        return arr[index];
    }
    let arr = [24, 45, 22, 35, 43];
    consolex.log(randomElement(arr)); // 22
}
/********************************************************************/
consolex.header(`26. Массив с заданным количеством элементов

Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.

    function arrayFilled(len, value) {
        // Ваш код
    }
    document.writeln(arrayFilled(5, 1));   // [1,1,1,1,1]
    document.writeln(arrayFilled(4, 12));  // [12,12,12,12]`
);
{
    function arrayFilled(len, value) {
        let res = new Array(len);
        for (let i = 0; i < len; i++) res[i] = value;
        return res;
    }

    function arrayFilled2(len, value) {
        return new Array(len).fill(value);
    }

    consolex.log(arrayFilled(5, 1));   // [1,1,1,1,1]
    consolex.log(arrayFilled2(5, 1));   // [1,1,1,1,1]

    consolex.log(arrayFilled(4, 12));  // [12,12,12,12]
    consolex.log(arrayFilled2(4, 12));  // [12,12,12,12]
}
/********************************************************************/
consolex.header(`27. Переместить элемент массива из одной позиции в другую

Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.

    function moveElement(arr,from,to) {
        // Ваш код
    }
    let arr = [ 'a', 'b', 'c', 'd', 'e'];
    document.writeln(moveElement(arr,3,1)); // ["a", "d", "b", "c", "e"]`
);
{
    function moveElement(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
    }
    let arr = [ 'a', 'b', 'c', 'd', 'e'];
    consolex.log(moveElement(arr,3,1)); // ["a", "d", "b", "c", "e"]
}
/********************************************************************/
consolex.header(`28. Массив указанной длины

Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, 
заполненный целыми числами, где каждое число больше предыдущего на единицу.

    function generateNumbers(start, len) {
        // Ваш код
    }
    document.writeln(generateNumbers(0, 5));  // 0,1,2,3,4
    document.writeln(generateNumbers(-5, 4)); // -5,-4,-3,-2`
);
{
    function generateNumbers(start, len) {
        let res = new Array(len);
        for (let i = 0; i < len; i++) res[i] = start++;
        return res;
    }
    consolex.log(generateNumbers(0, 5));  // 0,1,2,3,4
    consolex.log(generateNumbers(-5, 4)); // -5,-4,-3,-2`
}
/********************************************************************/
consolex.header(`29. Массив, содержащий все целые числа между start и end

Напишите функцию generateRange(start, end), которая генерирует массив заданной длины len, 
заполненный целыми числами. Каждое последующее число в массиве должно быть больше предыдущего на единицу.

    function generateRange(start, end) {
        // Ваш код
    }
    document.writeln(generateNumbers(0, 5));  // 0,1,2,3,4
    document.writeln(generateNumbers(-5, 4)); // -5,-4,-3,-2`
);
{
    function generateRange(start, end) {
        let res = new Array(end);
        for (let i = 0; i < end; i++) res[i] = start++;
        return res;
    }
    consolex.log(generateRange(0, 5));  // 0,1,2,3,4
    consolex.log(generateRange(-5, 4)); // -5,-4,-3,-2`
}
/********************************************************************/
consolex.header(`30. Массив длин строковых элементов

Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
    // Ваш код
    alert( vegetableLength ); // 7,4,7,8`
);
{
    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
    let vegetableLength = vegetables.map(val => val.length);
    consolex.log( vegetableLength ); // 7,4,7,8`
}
/********************************************************************/
consolex.header(`31. Массив сумм чисел

Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() 
напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, 
в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

    для numbers = [2, 3, 5, 7, 11, 13, 17]
    // ваш код
    currentSums(numbers); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]`
);
{
    const numbers = [2, 3, 5, 7, 11, 13, 17];
    function currentSums(numbers) {
        const res = numbers.reduce((acc,val,index) => acc.push(index ? acc[index-1] + val : val) && acc, []);
        consolex.log(res);
        return res;
    }

    currentSums(numbers); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]`

}
/********************************************************************/
consolex.header(`32. Равные в сумме пары чисел

Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме 
должны быть равны семи: (0:7), (1:6) и т.д.

    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    function sumSeven(numbers) {
        // ваш код
    }
    document.writeln(sumSeven(numbers)); // [0:7, 1:6, 2:5, 3:4]`
);
{
    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    function sumSeven(numbers) {
        const res = {};
        for (let i = 0; i < numbers.length - 1; i++) {
            let num1 = numbers[i];
            for (let j = i + 1; j < numbers.length; j++) {
                let num2 = numbers[j];
                if (num1 + num2 === 7) {
                    if (num1 > num2) [num1, num2] = [num2, num1];
                    res[num1 + ':' + num2] = [num1, num2];
                }
            }
        }
        return Object.keys(res);
    }
    consolex.log(sumSeven(arr)); // [0:7, 1:6, 2:5, 3:4]
}
/********************************************************************/
consolex.header(`33. Массив из первых букв

Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв 
слов строки str. При написании данного кода, позаимствуйте у объека Array метод filter.

    let str = "Каждый охотник желает знать, где сидит фазан.";
    // Ваш код
    document.write(array);  // [К,о,ж,з,г,с,ф]`
);
{
    let str = "Каждый охотник желает знать, где сидит фазан.";
    const array = str.split('').filter((val,idx, arr) => !idx || arr[idx - 1] === ' ')
    consolex.log(array);  // [К,о,ж,з,г,с,ф]`

    const array2 = [].filter.call(str, (val, idx, arr) => !idx || arr[idx - 1] === ' ')
    consolex.log(array2);  // [К,о,ж,з,г,с,ф]`
}
/********************************************************************/
consolex.header(`34. Массив строк по три символа

Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, 
состоящих из предыдущего, текущего и следующего символа строки str. При написании данного кода, 
позаимствуйте у объека Array метод map.

    let str = "JavaScript";
    // Ваш код
    document.writeln(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]`
);
{
    let str = "JavaScript";

    const arr = str.split('').map((val, idx, arr) =>
        ((idx > 0) ? arr[idx - 1] : '') + val + ((idx + 1 < arr.length) ? arr[idx + 1] : '') );
    consolex.log(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]`

    const arr2 = [].map.call(str, (val, idx, arr) =>
        ((idx > 0) ? arr[idx - 1] : '') + val + ((idx + 1 < arr.length) ? arr[idx + 1] : '') );
    consolex.log(arr2); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]`
}
/********************************************************************/
consolex.header(`35. Получить массив цифр по убыванию

Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в 
массив цифр расположенных по убыванию их значений.

    let numerics = [5, 7, 2, 9, 3, 1, 8];
    // Ваш код
    document.writeln(numerics); // [9,8,7,5,3,2,1]`
);
{
    let numerics = [5, 7, 2, 9, 3, 1, 8];
    numerics.sort((a, b) => b - a);
    consolex.log(numerics); // [9,8,7,5,3,2,1]`
}
/********************************************************************/
consolex.header(`36. Слияние массивов

Напишите код, объединяющий три массива цифр, и располагающий, с помощью метода pop(), 
цифры в полученном массиве в порядке убывания их значений через пробел.

    let a = [1,2,3];
    let b = [4,5,6];
    c = [7,8,9];
    function getArr(a, b, c) {
        // Ваш код
    }
    getArr(a, b, c); // [9 8 7 6 5 4 3 2 1]`
);
{
    let a = [1,2,3];
    let b = [4,5,6];
    c = [7,8,9];
    function getArr(a, b, c) {
        const arr = [];
        while (c.length) arr.push(c.pop());
        while (b.length) arr.push(b.pop());
        while (a.length) arr.push(a.pop());
        let res = arr./*sort((a, b) => b - a).*/join(' ');
        console.log('[' + res + ']');
        return res;
    }
    getArr(a, b, c); // [9 8 7 6 5 4 3 2 1]
}
/********************************************************************/