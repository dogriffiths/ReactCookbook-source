import uuidv4 from "./uuidv4";
import usePersistentState from "./usePersistentState";

const useTasks = () => {
    const [tasks, setTasks] = usePersistentState('tasks', []);

    return {
        tasks,
        save(task) {
            if (task.id) {
                return setTasks(ts => {
                    const i = ts.findIndex(t => t.id === task.id);
                    const result = [...ts];
                    if (i === -1) {
                        result.push({...task});
                    } else {
                        result[i] = {...task};
                    }
                    return result;
                });
            } else {
                return setTasks(t => [...t, {...task, id: uuidv4()}]);
            }
        },
        remove(task) {
            return setTasks(t => t.filter(t => t.id !== task.id));
        }
    }
}

export default useTasks;