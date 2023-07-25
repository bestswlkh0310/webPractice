let draggedItem = null;

const dragStart = (event) => {
    draggedItem = event.target;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", draggedItem.innerHTML);
};

const dragOver = (event) => {
    event.preventDefault();
};

const drop = (event) => {
    event.preventDefault();
    const target = event.target;
    const container = target.parentNode;
    container.insertBefore(draggedItem, target);
    draggedItem = null;
};

const deleteAll = () => {
    const blackList = document.querySelectorAll(".black");
    blackList.forEach((black) => {
        const checkbox = black.querySelector(".checkbox");
        if (checkbox.checked) {
            black.parentNode.removeChild(black);
        }
    });
};

const checkBlack = (event) => {
    const target = event.target;
    const checkbox = target.querySelector(".checkbox");
    checkbox.checked = !checkbox.checked;
};

const register = () => {
    const inputText = document.getElementById("inputText");
    const text = inputText.value;
    if (text === "") {
        alert("제대로 입력해주면 감사드립니다");
    } else {
        const blackList = document.getElementById("blackList");
        const black = document.createElement("li");
        const span = document.createElement("span");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        span.textContent = text;
        black.className = "black";
        black.addEventListener("click", checkBlack);
        black.draggable = true;
        black.addEventListener("dragstart", dragStart);
        black.addEventListener("dragover", dragOver);
        black.addEventListener("drop", drop);
        checkbox.className = "checkbox";
        black.appendChild(span);
        black.appendChild(checkbox);
        blackList.appendChild(black);
        inputText.value = "";
    }
};
