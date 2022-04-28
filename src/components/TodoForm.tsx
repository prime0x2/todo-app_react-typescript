import React, { useEffect } from "react";
import useTodo from "../hooks/useTodo";

const TodoForm = () => {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodo();

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            addTodo(inputRef.current.value);
            inputRef.current.value = "";
        }
    };

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <h1 className="text-3xl uppercase mb-5">Todo App</h1>
            <div className="input__group">
                <input type="text" ref={inputRef} placeholder="New Todo..." />
                <button type="submit">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
            {todos.map((todo) => (
                <div key={todo.id} className="todo__item">
                    <input
                        type="checkbox"
                        id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`}>
                        {todo.completed ? <del>{todo.text}</del> : todo.text}
                    </label>
                    <button
                        className="todo__remove"
                        onClick={() => removeTodo(todo.id)}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            ))}
        </form>
    );
};

export default TodoForm;
