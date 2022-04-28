interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

type Action =
    | { type: "ADD_TODO"; payload: Todo }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "REMOVE_TODO"; payload: number };
