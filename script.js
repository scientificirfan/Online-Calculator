function insert(value) {
    const input = document.getElementById('result');
    input.value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function backspace() {
    const input = document.getElementById('result');
    input.value = input.value.slice(0, -1);
}

function calculate() {
    const input = document.getElementById('result');
    const expression = input.value;

    try {
        // Prevent malicious code injection by removing alphabets (basic safeguard)
        if (/[^0-9+\-*/().^%]/.test(expression)) {
            throw new Error("Invalid Input");
        }
        const result = math.evaluate(expression);
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
}

function factorial() {
    const input = document.getElementById('result');
    let number = input.value;

    try {
        if (!/^\d+$/.test(number)) throw new Error("Invalid factorial input");

        let result = math.factorial(parseInt(number));
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
}
