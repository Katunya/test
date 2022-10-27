import React, {ChangeEvent, useCallback, useState} from "react";
import styles from "./Task.css";

type Props = {
    onAdd: (name: string) => void;
}
export function TaskInput({onAdd}: Props) {
    const [name, setName] = useState("");

    const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handleAdd = useCallback(() => {
        onAdd(name);
    }, [name]);

    return <div className={styles.TaskInput}>
        <input onChange={handleOnChange} className={styles.Input} type="text" placeholder="Enter task name"/>
        <input onClick={handleAdd} className={styles.Button} type="button" value="Add"/>
    </div>
}
