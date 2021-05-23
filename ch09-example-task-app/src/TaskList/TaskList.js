import Task from "../Task";
import './TaskList.css';

function TaskList({tasks, onDelete, onEdit}) {
    return <ul className='TaskList'>
        {
            tasks.map(t => <Task
                key={t.id}
                task={t}
                onDelete={() => onDelete(t)}
                onEdit={() => onEdit(t)}
            />)
        }
    </ul>;
}

export default TaskList;