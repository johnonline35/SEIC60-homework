const calculate = function(num1, num2, operation) {
    if (operation === `add`) {
        return num1 + num2;
    }
    if (operation === `sub`) {
        return num1 - num2;
    }
    if (operation === `multi`) {
        return num1 * num2;
    }
    if (operation === `div`) {
        return num1 / num2;
    }
    if (operation === `exp`) {
        return num1 ** num2;
    }
}

console.log(calculate(4, 2, `add`))
console.log(calculate(4, 2, `sub`))
console.log(calculate(4, 2, `multi`))
console.log(calculate(4, 2, `div`))
console.log(calculate(4, 2, `exp`))

