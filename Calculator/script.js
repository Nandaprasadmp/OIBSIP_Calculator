const display = document.getElementById('display-text');
const buttons = document.getElementById('buttons');
let currentInput = "";

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const val = e.target.innerText;

        // Requirement: If-Else Logic for operations
        if (val === "C") {
            currentInput = "";
            display.innerText = "0";
        } 
        else if (val === "DEL") {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || "0";
        } 
        else if (val === "=") {
            try {
                // Perform calculation
                if (currentInput !== "") {
                    currentInput = eval(currentInput).toString();
                    display.innerText = currentInput;
                }
            } catch {
                display.innerText = "Error";
                currentInput = "";
            }
        } 
        else {
            // Logic to prevent multiple leading zeros
            if (currentInput === "0" && val !== ".") {
                currentInput = val;
            } else {
                currentInput += val;
            }
            display.innerText = currentInput;
        }
    }
});