var input = document.querySelector('.input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var list = document.querySelector('.list');
var search = document.querySelector('.search');

let ok = false;


input.addEventListener('input', () => {
    ok = input.value.trim().length > 0;
});

window.addEventListener('beforeunload', (e) => {
    if (ok) {
        e.preventDefault(); 
        e.returnValue = ''; 
    }
});

window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('task'));
    if (savedTasks && savedTasks.length > 0) {
        savedTasks.forEach(task => {
            add(task); 
        });
    }
};

const add = (task) => {
    var li = document.createElement('li');
    li.textContent = task;

    var del = document.createElement('button');
    del.textContent = 'Xóa';
    li.appendChild(del);  
    list.appendChild(li);

   
    del.addEventListener('click', () => {
        removeTask(task, li); 
    });

   
    li.addEventListener('mouseenter', () => {
        li.style.backgroundColor = '#f0f0f0';
    });
    li.addEventListener('mouseleave', () => {
        li.style.backgroundColor = ''; 
    });
};


const removeTask = (task, li) => {
    li.remove(); 
    let tasks = JSON.parse(localStorage.getItem('task')) || [];
    tasks = tasks.filter(t => t !== task); 
    localStorage.setItem('task', JSON.stringify(tasks)); 
};


form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    var res = input.value.trim(); 
    if (res) {
        add(res); 
        let tasks = JSON.parse(localStorage.getItem('task')) || [];
        tasks.push(res); 
        localStorage.setItem('task', JSON.stringify(tasks)); 
        input.value = ''; 
    }
});


const loc = (key) => {
    const tasks = JSON.parse(localStorage.getItem('task')) || [];
    const ds = tasks.filter(task => task.toLowerCase().includes(key.toLowerCase())); 
    list.innerHTML = '';
    ds.forEach(task => {
        add(task);
    });
};

search.addEventListener('keyup', (e) => {
    const key = e.target.value.trim();
    loc(key); 
});
