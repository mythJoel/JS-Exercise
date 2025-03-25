let numbers = [];

function insertNumber() {
    let input = document.getElementById("numberInput");
    let value = parseInt(input.value);

    if (!isNaN(value)) {
        numbers.push(value);
        updateUI();
    }

    input.value = "";
}

function deleteAll() {
    numbers = [];
    updateUI();
}

function updateUI() {
    let numbersList = document.getElementById("numbersList");
    numbersList.innerHTML = numbers.join("<br>");

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let highest = numbers.length > 0 ? Math.max(...numbers) : 0;
    let lowest = numbers.length > 0 ? Math.min(...numbers) : 0;

    document.getElementById("sum").textContent = sum.toString().trim();
    document.getElementById("highest").textContent = highest.toString().trim();
    document.getElementById("lowest").textContent = lowest.toString().trim();
}