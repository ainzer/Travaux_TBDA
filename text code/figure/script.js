const shapeSelect = document.getElementById('shape-select');
const sideAInput = document.getElementById('side-a-input');
const sideBInput = document.getElementById('side-b-input');
const heightInput = document.getElementById('height-input');
const radiusInput = document.getElementById('radius-input');
const calculateButton = document.getElementById('calculate-button');
const resultDiv = document.getElementById('result');

function calculateSquareArea(side) {
    return side ** 2;
}

function calculateRectangleArea(sideA, sideB) {
    return sideA * sideB;
}

function calculateTriangleArea(sideA, height) {
    return (sideA * height) / 2;
}

function calculateCicleArea(radius) {
    return Math.PI * radius ** 2;
}

function clearInputs() {
    sideAInput.value = '';
    sideBInput.value = '';
    heightInput.value = '';
    radiusInput.value = '';
}

function showError(message) {
    resultDiv.innerHTML = `<p class="error">${message}</p>`
}

function showResult(result) {
    resultDiv.innerHTML = `<p>L'aire est: ${result}</p>`
}

calculateButton.addEventListener('click', function () {
    const shape = shapeSelect.value;
    let area;

    switch (shape) {
        case 'square':
            const squareSide = Number(sideAInput.value);
            if (!squareSide || squareSide <= 0) {
                showError('Veuillez entrer une valeur valide pour le côté du carré.');
                return;
            }
            area = calculateSquareArea(squareSide);
            break;

        case 'rectangle':
            const rectangleSideA = Number(sideAInput.value);
            const rectangleSideB = Number(sideBInput.value);
            if (!rectangleSideA || !rectangleSideB || rectangleSideA <= 0 || rectangleSideB <= 0) {
                showError('Veuillez entrer des valeurs valides pour les côtés du rectangle.');
                return;
            }
            area = calculateRectangleArea(rectangleSideA, rectangleSideB);
            break;

        case 'triangle':
            const triangleSideA = Number(sideAInput.value);
            const triangleHeight = Number(heightInput.value);
            if (!triangleSideA || !triangleHeight || triangleSideA <= 0 || triangleHeight <= 0) {
                showError('Veuillez entrer des valeus valides pour le côté et la hauteur du triangle.');
                return;
            }
            area = calculateTriangleArea(triangleSideA, triangleHeight);
            break;

        case 'circle':
            const circleRadius = Number(radiusInput.value);
            if (!circleRadius || circleRadius <= 0) {
                showError('Veuillez entrer une valeur valide pour le rayon du cercle.');
                return;
            }
            area = calculateCicleArea(circleRadius);
            break;

        default:
            showError('veuillez choisir une forme.');
            return;
    }
    showResult(area.toFixed(2));
});