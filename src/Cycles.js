/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i += 1) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;
    while (a > 0.1) {
        a = a / 2;
        i++;
    }
    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let start = 0;
    let end = 3;
    let substr1 = ' ';
    let substr2 = ' ';
    let result = ' ';
    do {
        substr1 = message.substring(start, end);
        substr2 = message.substring(start, end - 1) + '_';
        if (start == 0) {
            result = substr2;
        } else {
            result += substr2;
        }
        start += 3;
        end += 3;
    } while (end < message.length - 1);

    if (start < message.length) {
        substr1 = message.substring(start, message.length);
        result += substr1;
    }
    return result;
}
