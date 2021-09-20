const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])
let result = 0

switch (operation) {
    case 'add':
        result = number1 + number2
        break;
    case 'sub':
        result = number1 - number2
        break;
    case 'mult':
        result = number1 * number2
        break;
    case 'div':
        result = number1 / number2
    default:
        break;
}

console.log('Resposta: ', result)