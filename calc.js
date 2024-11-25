class Calculator {
    constructor() {
        this.currentValue = '';
        this.previousValue = '';
        this.operator = null;
    }

    add(a, b) {
        return parseFloat((a + b).toFixed(2));
    }

    subtract(a, b) {
        return parseFloat((a - b).toFixed(2));
    }

    multiply(a, b) {
        return parseFloat((a * b).toFixed(2));
    }

    divide(a, b) {
        if (b === 0) {
            return 'ERROR';
        }
        return parseFloat((a / b).toFixed(2));
    }

    operate() {
        let result;
        const a = parseFloat(this.previousValue);
        const b = parseFloat(this.currentValue);

        switch (this.operator) {
            case '+':
                result = this.add(a, b);
                break;
            case '-':
                result = this.subtract(a, b);
                break;
            case '*':
                result = this.multiply(a, b);
                break;
            case '/':
                result = this.divide(a, b);
                break;
            default:
                return;
        }

        this.currentValue = result.toString();
        this.previousValue = '';
        this.operator = null;
        return result;
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculator;
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    const calc = new Calculator();

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleInput(button.id, button.textContent);
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key >= '0' && key <= '9') {
            handleInput(key, key);
        } else if (key === '.') {
            handleInput('decimal', key);
        } else if (key === '+') {
            handleInput('add', key);
        } else if (key === '-') {
            handleInput('subtract', key);
        } else if (key === '*') {
            handleInput('multiply', key);
        } else if (key === '/') {
            handleInput('divide', key);
        } else if (key === 'Enter') {
            handleInput('equals', '=');
        } else if (key === 'Backspace') {
            handleInput('backspace', '←');
        } else if (key === 'Escape') {
            handleInput('clear', 'C');
        }
    });

    function handleInput(id, textContent) {
        if (id === 'equals') {
            display.textContent = calc.operate();
        } else if (id === 'add' || id === 'subtract' || id === 'multiply' || id === 'divide') {
            if (calc.currentValue === '' && id === 'subtract') {
                calc.currentValue = '-';
                display.textContent = calc.currentValue;
            } else {
                calc.operator = textContent;
                calc.previousValue = calc.currentValue;
                calc.currentValue = '';
                display.textContent = `${calc.previousValue} ${calc.operator}`;
            }
        } else if (id === 'backspace') {
            calc.currentValue = calc.currentValue.slice(0, -1);
            display.textContent = calc.currentValue || '0';
        } else if (id === 'clear') {
            calc.currentValue = '';
            calc.previousValue = '';
            calc.operator = null;
            display.textContent = '0';
        } else {
            calc.currentValue += textContent;
            display.textContent = `${calc.previousValue} ${calc.operator || ''} ${calc.currentValue}`;
        }
    }
});
