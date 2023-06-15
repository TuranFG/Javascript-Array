let first = [];
let last = [];
let rdm;
let number = 0;
let currentNumber = 1;
const totalCells = 16;
let gameTimer;

for (let i = 0; i < totalCells; i++) {
    first[i] = i + 1;
}

for (let i = 0; i < totalCells; i++) {
    rdm = Math.floor(Math.random() * first.length);
    last[i] = first[rdm];
    first.splice(rdm, 1);
}

function table() {
    let tbl = document.getElementById("tbl");
    let data = "";
    for (let i = 0; i < 4; i++) {
        data += "<tr>";
        for (let j = 0; j < 4; j++) {
            data += `<td onclick="cellClick(event)" oncontextmenu="return blockRightClick(event)">${last[number]}</td>`;
            number++;
        }
        data += "</tr>";
    }
    tbl.innerHTML = data;

   
    gameTimer = setTimeout(() => {
        alert("Time's up! Game Over!");
        resetGame();
    }, 15000); 
}

function cellClick(event) {
    const cell = event.target;
    const selectedNumber = parseInt(cell.innerText);
    if (cell.classList.contains("clicked")) {
        return;
    }
    if (selectedNumber === currentNumber) {
        cell.classList.add("clicked");
        currentNumber++;

        if (currentNumber > totalCells) {
            clearTimeout(gameTimer); 

            setTimeout(() => {
                alert("Congratulations! You completed the Schulte Table!");
                resetGame();
            }, 500);
        }
    } else {
        cell.style.backgroundColor = "red";
        clearTimeout(gameTimer); 

        setTimeout(() => {
            alert("Game Over! You clicked the wrong cell.");
            resetGame();
        }, 500);
    }
}

function blockRightClick(event) {
    if (event.button === 2) {
        event.preventDefault();
        return false;
    }
}

function resetGame() {
    const cells = document.querySelectorAll("#tbl td");
    cells.forEach((cell) => {
        cell.classList.remove("clicked");
        cell.style.backgroundColor = "";
    });
    currentNumber = 1;
    number = 0;
    first = [];
    last = [];

    for (let i = 0; i < totalCells; i++) {
        first[i] = i + 1;
    }

    for (let i = 0; i < totalCells; i++) {
        rdm = Math.floor(Math.random() * first.length);
        last[i] = first[rdm];
        first.splice(rdm, 1);
    }

    table();
}

table();

