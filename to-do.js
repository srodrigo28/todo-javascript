// alert('Carregou')

// seleção de elementos
    const todoForm = document.querySelector('#todo-form');
    const todoInput = document.querySelector('#todo-input');
    const todoList = document.querySelector('#todo-list');
    const editForm = document.querySelector('#edit-form');
    const editInput = document.querySelector('#edit-input');
    const cancelEditBtn = document.querySelector('#cancel-edit-btn');

    let oldInputValue;

// Funções
    const saveTodo = (texto) => {
        const todo = document.createElement("div");
        todo.classList.add("todo")

        const todoTitle = document.createElement("h3");
        todoTitle.innerText = texto;
        todo.appendChild(todoTitle);

        /** Criando 1 botão */
        const doneBtn = document.createElement("button")
        doneBtn.classList.add("finish-todo")
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(doneBtn);

        /** Criando 2 botão */
        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-todo")
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
        todo.appendChild(editBtn);

        /** Criando 3 botão */
        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("remove-todo")
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(deleteBtn);

        // coloca todos elementos criados na lista
        todoList.appendChild(todo);

        // limpa o campo
        todoInput.value = "";
        
        // colcoa o cuurso no campo
        todoInput.focus();

        // console.log(todo);
        console.log(todo);
    }

    const toggleForms = () => {
        editForm.classList.toggle("hide");
        todoForm.classList.toggle("hide");
        todoList.classList.toggle("hide");
     
    }

    const updateTodo = (text) => {
        const todos = document.querySelectorAll(".todo")

        todos.forEach((todo) => {
            let todoTitle = todo.querySelector("h3")
            
            if(todoTitle.innerText === oldInputValue){
                todoTitle.innerText = text;
            }
        });
        alert('Alterado : )')
    }


// Eventos
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const inputValue = todoInput.value;
        
        if(inputValue){
            alert("input value: " + inputValue)
            saveTodo(inputValue)
        }else{
            alert("Preencha o campo: " + inputValue)
        }
    })

    document.addEventListener("click", (e) => {
        let todoTitle;
        const targetEl = e.target
        const parentEl = targetEl.closest("div");

        if(parentEl && parentEl.querySelector("h3")){
            todoTitle = parentEl.querySelector("h3").innerText;
            
        }

        if(targetEl.classList.contains("finish-todo")){
            parentEl.classList.toggle("done")
            
            // alert("Clicou o campo: " + targetEl);
        }

        if(targetEl.classList.contains("remove-todo")){
            parentEl.remove();
            
            // alert("Clicou o campo: " + targetEl);
        }
        if(targetEl.classList.contains("edit-todo")){
            toggleForms();
            // alert('Editar ?')

            editInput.value = todoTitle;
            oldInputValue = todoTitle;
            // alert(oldInputValue)
        }
    })

    cancelEditBtn.addEventListener("click", (e) => {
        e.preventDefault()
        toggleForms();
        // alert('Cancelar ?')
    })

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const editInputValue = editInput.value

        if(editInputValue){
            // Atualiza
            updateTodo(editInputValue)

        }

        toggleForms()

    })
