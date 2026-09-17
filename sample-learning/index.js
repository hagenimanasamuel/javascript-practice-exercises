const input = document.getElementById('input');
const addBtn = document.getElementById("add")
const myList = document.getElementById("myList");

function addTask() {
    if (input.value < 1) {
        alert("please add something")
    } else {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "DELETE"
        const list = document.createElement('li');
        list.textContent = input.value;
        myList.appendChild(list);
        input.value = "";
        list.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            list.remove();
        })
    }
}

addBtn.addEventListener('click', addTask);

input.onkeyup = (e) => {
    if (e.key === 'Enter') addTask();
}






