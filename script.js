
const couples = [
    { male: "John", female: "Jane", malePoints: 0, femalePoints: 0, totalPoints: 0 },
    { male: "Michael", female: "Rachel", malePoints: 0, femalePoints: 0, totalPoints: 0 },
    { male: "William", female: "Sophia", malePoints: 0, femalePoints: 0, totalPoints: 0 },
    { male: "David", female: "Emily", malePoints: 0, femalePoints: 0, totalPoints: 0 },
    { male: "James", female: "Olivia", malePoints: 0, femalePoints: 0, totalPoints: 0 }
];

function renderCouples() {
    const couplesContainer = document.getElementById('couplesContainer');

    couples.forEach((couple, index) => {
        const coupleDiv = document.createElement('div');
        coupleDiv.classList.add('couple');

        const label = document.createElement('label');
        label.textContent = `Couple ${index + 1}: `;
        coupleDiv.appendChild(label);

        const maleInput = createInput(couple.male, index, 'malePoints');
        const femaleInput = createInput(couple.female, index, 'femalePoints');

        coupleDiv.appendChild(maleInput);
        coupleDiv.appendChild(femaleInput);

        couplesContainer.appendChild(coupleDiv);
    });
}

function createInput(label, index, property) {
    const inputDiv = document.createElement('div');

    const inputLabel = document.createElement('label');
    inputLabel.textContent = `${label} Points: `;
    inputDiv.appendChild(inputLabel);

    const input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.max = 10;
    input.value = 0;
    input.addEventListener('input', (event) => updatePoints(index, property, event.target.value));
    inputDiv.appendChild(input);

    return inputDiv;
}

function updatePoints(index, property, value) {
    couples[index][property] = parseInt(value);
}

function calculateWinner() {
    couples.forEach(couple => {
        couple.totalPoints = couple.malePoints + couple.femalePoints;
    });

    const winnerCouple = couples.reduce((prev, current) => (prev.totalPoints > current.totalPoints) ? prev : current);

    alert(`Winner: Couple ${couples.indexOf(winnerCouple) + 1} (${winnerCouple.male} & ${winnerCouple.female}) with ${winnerCouple.totalPoints} points`);
}

renderCouples();
