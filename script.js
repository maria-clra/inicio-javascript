let list = document.querySelector('.list');
let input = document.querySelector('.input');

let tasks = [];

input.addEventListener('keyup', (event) => {
    if (event.key.toLowerCase() === 'enter' && input.value.length > 0) {
        tasks.push({
            done: false,
            title: input.value
        });
        input.value = '';
        renderList();
    }
})


function renderList() {
    list.innerHTML = '';
    for (let i in tasks) {
        let taskLi = document.createElement('li');

        let taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'checkbox');
        if (tasks[i].done
            === true) {
            taskInput.setAttribute('checked', 'true');
            taskLi.classList.add('done');
        }
        taskInput.addEventListener('click', () => {
            tasks[i].done = !tasks[i].done;
            renderList();
        })


        taskLi.appendChild(taskInput);

        let taskSpan = document.createElement('span');
        taskSpan.innerHTML = tasks[i].title;
        taskLi.appendChild(taskSpan);


        list.appendChild(taskLi);
    }
}

renderList()