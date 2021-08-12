module.exports = function toReadable(number) {
    if (number < 0) return 0
    const numberString = function (num) {
        switch (num) {
            case 0:
                return 'zero'
            case 1:
                return 'one'
            case 2:
                return 'two'
            case 3:
                return 'three'
            case 4:
                return 'four'
            case 5:
                return 'five'
            case 6:
                return 'six'
            case 7:
                return 'seven'
            case 8:
                return 'eight'
            case  9:
                return 'nine'
            case 10:
                return 'ten'
            case  11:
                return 'eleven'
            case  12:
                return 'twelve'
            case 13:
                return 'thirteen'
            case  14:
                return 'fourteen'
            case  15:
                return 'fifteen'
            case  16:
                return 'sixteen'
            case  17:
                return 'seventeen'
            case  18:
                return 'eighteen'
            case  19:
                return 'nineteen'
            case  20:
                return 'twenty'
            case   30:
                return 'thirty'
            case 40:
                return "forty"
            case 50:
                return 'fifty'
            case 60:
                return 'sixty'
            case  70:
                return 'seventy'
            case  80:
                return 'eighty'
            case  90:
                return 'ninety'
        }
    }
    if (number < 21) return numberString(number)
    if (number > 20 && number < 100) {
        let a = number - number % 10
        let b = number - a
        if (b === 0) {
            return numberString(a)
        }
        return numberString(a) + ' ' + numberString(b)
    }
    if (number > 99 && number < 1000) {
        let c = Math.floor(number / 100) // делим число на 100, и округляем в меньшую сторону
        let d = number % 100 // откидываем сотню
        let a = d - d % 10 // получаем десятки
        let b = d - a // получаем еденицы
        if (a === 0 && b === 0) { // 100, 200, 300 ...
            return numberString(c) + ' ' + 'hundred'
        }
        if (a === 0) { // 101, 205, 308, 505...
            return numberString(c) + ' ' + 'hundred' + ' ' + numberString(b)
        }
        if (a === 10) { // 912, 619, 112, 715 ...
            return numberString(c) + ' ' + 'hundred' + ' ' + numberString(d)
        }
        if (b === 0) { // 820, 910, 110, 730 ...
            return numberString(c) + ' ' + 'hundred' + ' ' + numberString(a)
        } else {
            return numberString(c) + ' ' + 'hundred' + ' ' + numberString(a) + ' ' + numberString(b)
        }
    }
}


