import { useState } from 'react';

export default function Task({ task, updateTask, deleteTask}) {
    const [isEdit, setIsEdit] = useState(false);
    const [edditedTask, setEdditedTask] = useState(task.text);

    function handleModify() {
        setIsEdit(true);
    }
    function handleChange(e) {
        setEdditedTask(e.target.value);
    }
    function handleSave(){
        updateTask(task.id, edditedTask);
        setEdditedTask(false)
    }
    function handleCancel(){
        setIsEdit(false)
    }


    return (

        <li>
            {isEdit ? (
                <> <form onSubmit={handleSave}>

                    <input
                        onChange={handleChange}
                        value={edditedTask}
                    />
                    <button>Save</button>
                    <button onClick={handleCancel} type="button">Cancel</button>
                </form>
                </>
            ) : (
                <>
                    <p>{task.text}</p>
                    <button onClick={handleModify}>Modify</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </>
            )}
        </li>

    );
}