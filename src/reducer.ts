import {Task} from "./types/Task";
import {AnyAction} from "redux";
import {addAction, removeAction} from "./actions";

type TasksState = {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: []
}

export function tasksReducer(state = [], action: AnyAction) {
    if (addAction.match(action)) {
        return state;
    } else if (removeAction.match(action)) {
        return state;
    } else {
        return state;
    }
}
