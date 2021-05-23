import TaskList from "../TaskList";
import Skip from "../Skip";
import './TaskContexts.css';

function TaskContexts({contexts, tasks, onDelete, onEdit}) {
    return contexts.map(c => {
        const tasksForContext = tasks.filter(t => t.context === c.value);
        if (tasksForContext.length === 0) {
            return <div className='TaskContexts-context'>&nbsp;</div>;
        }
        return <div key={c.value} className='TaskContexts-context'>
            <Skip name={c.name}>
                <h2>{c.name}</h2>
                <TaskList tasks={tasksForContext} onDelete={onDelete} onEdit={onEdit}/>
            </Skip>
        </div>;
    });
}

export default TaskContexts;