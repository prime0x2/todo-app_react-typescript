import { useReducer } from "react";
import {
    getTodos,
    addTodos,
    removeTodos,
    updateTodos,
} from "../utilities/localStorage";

const useTodo = () => {
    const initialState = getTodos();

    const reducer = (state: Todo[] = initialState, action: Action) => {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, action.payload];
            case "TOGGLE_TODO":
                return state.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                );
            case "REMOVE_TODO":
                return state.filter((todo) => todo.id !== action.payload);
            default:
                return state;
        }
    };

    const [todos, dispatch] = useReducer(reducer, initialState);

    const addTodo = (text: string) => {
        const id = todos.length + 1;
        dispatch({ type: "ADD_TODO", payload: { id, text, completed: false } });
        addTodos({ id, text, completed: false });
    };

    const toggleTodo = (id: number) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
        updateTodos(id);
    };

    const removeTodo = (id: number) => {
        dispatch({ type: "REMOVE_TODO", payload: id });
        removeTodos(id);
    };

    return { todos, addTodo, toggleTodo, removeTodo };
};

export default useTodo;
