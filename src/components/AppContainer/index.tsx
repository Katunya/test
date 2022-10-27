import React from "react";
import styles from "./AppContainer.css";
import {TaskInput} from "../TaskInput";
import {useDispatch, useSelector} from "react-redux";
import {tasksSelector} from "../../selectors";
import {addAction} from "../../actions";

export function AppContainer() {
    const tasks = useSelector(tasksSelector);
    const dispatch = useDispatch();

    return <div className={styles.App}>
        <div className={styles.Header}>ToDo List App</div>

        <div className={styles.TaskInputWrapper}>
            <TaskInput
                onAdd={name => dispatch(addAction(name))}
            />
        </div>
    </div>
}
