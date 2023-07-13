const storage = localStorage.getItem("toDoList") || "[]"
const listToStorage = JSON.parse(storage)


const inputAdd = document.querySelector(".input-container input")
const btnAdd = document.querySelector(".btn-add")
const tasks = document.querySelector(".tasks")
let tasksList = listToStorage

function changeTask(id) {
    const checkbox = document.getElementById(id)
    const newList = tasksList.map(item => {
        if (item.id === id) {
            item.checked = checkbox.checked
        }
        return item
    });
    
    tasksList = newList;
    
    populateTasks();
}


function deleteTask(id) {
    const newList = tasksList.filter(item => item.id !== id);
    tasksList = newList;
    populateTasks();
}


function populateTasks() {
    let taskItems = ""
    listToStorage.forEach(item => {
        taskItems += `
        <li>
            <label for="${item.id}">
                <input type="checkbox" onchange="changeTask('${item.id}') name="" id="${item.id}" ${item.checked ? checked : ""}>
                <span>${item.name}</span>
            </label>
            <i class='bx bxs-trash' onClick="deleteTask('${item.id}')"></i>
    
        </li>
        `

    })
    tasks.innerHTML = taskItems
    localStorage.setItem("toDoList", JSON.stringify(tasksList))
}

function AddTasksToList() {
    const inputValue = inputAdd.value

    if (inputValue/*JS já considera falso*/) {
        const item = {
            id: crypto.randomUUID(),
            name: inputValue,
            checked: false
        }

        const ifExists = tasksList.filter(item => item.name === inputValue)

        if (ifExists.length == 0) {
            tasksList.push(item)
            inputAdd.style.border = "solid 1px transparent"
            inputAdd.value = ""
            populateTasks()
        } else {
            alert('Essa tarefa já existe!')
            inputAdd.value = ""
        }


    } else {
        inputAdd.style.border = "solid var(--error) 1px"
        alert('O campo não pode ser vazio!')
    }

}

inputAdd.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        AddTasksToList()
    }
})

btnAdd.addEventListener("click", AddTasksToList)

populateTasks()