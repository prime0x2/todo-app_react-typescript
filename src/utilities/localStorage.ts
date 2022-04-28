const getTodos = (): Todo[] => {
    const todo = localStorage.getItem("todos");
    return todo ? JSON.parse(todo) : [];
};

const addTodos = (todos: Todo) => {
    const todo = getTodos();
    todo.push(todos);
    localStorage.setItem("todos", JSON.stringify(todo));
};

const updateTodos = (id: number) => {
    const todo = getTodos();
    const todoIndex = todo.findIndex((todo) => todo.id === id);
    todo[todoIndex].completed = !todo[todoIndex].completed;
    localStorage.setItem("todos", JSON.stringify(todo));
};

const removeTodos = (id: number) => {
    const todo = getTodos();
    const todoIndex = todo.findIndex((todo) => todo.id === id);
    todo.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todo));
};

export { getTodos, addTodos, updateTodos, removeTodos };
