function createRandomList() {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
    const randomList = document.getElementById("randomList");
    randomList.innerHTML = "";
    shuffleArray(items);
    for (let i = 0; i < items.length; i++){
        const li = document.createElement("li");
        li.innerHTML = items[i];
        randomList.appendChild(li);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j] = array[j], array[i]];
    }
}