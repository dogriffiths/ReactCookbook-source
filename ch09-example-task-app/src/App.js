import {useState} from "react";
import useTaskContexts from "./useTaskContexts";
import useTasks from "./useTasks";
import ModalQuestion from "./ModalQuestion";
import TaskContexts from "./TaskContexts";
import TaskForm from "./TaskForm";
import './App.css';
import SkipButton from "./SkipButton";

const App = () => {
    const contexts = useTaskContexts();
    const {tasks, save, remove} = useTasks();
    const [editTask, setEditTask] = useState();
    const [taskToRemove, setTaskToRemove] = useState();
    const [formOpen, setFormOpen] = useState(false);

    return (
        <>
            <header>
                <SkipButton onClick={() => document.querySelector('.addButton').focus()}>
                    Skip to content
                </SkipButton>
                <h1>Manage Tasks</h1>
            </header>
            <nav>
                <a href='/contacts'>Contacts</a>&nbsp;|&nbsp;
                <a href='/events'>Events</a>&nbsp;|&nbsp;
                Tasks&nbsp;|&nbsp;
                <a href='/notes'>Notes</a>&nbsp;|&nbsp;
                <a href='/time'>TimeRec</a>&nbsp;|&nbsp;
                <a href='/diary'>Diary</a>&nbsp;|&nbsp;
                <a href='/expenses'>Expenses</a>&nbsp;|&nbsp;
                <a href='/invoices'>Invoices</a>
            </nav>
            <main>
                <button aria-haspopup='dialog' className='addButton' onClick={() => setFormOpen(true)}>+</button>
                <TaskContexts contexts={contexts}
                              tasks={tasks}
                              onDelete={setTaskToRemove}
                              onEdit={task => {
                                  console.log('XXXXX inside onEdit!!!!')

                                  setEditTask(task);
                                  setFormOpen(true);
                              }}
                />
            </main>
            <footer>
                &#169;2029, Amalgamated Consultants Corp. All Rights Reserved.
            </footer>
            <TaskForm contexts={contexts}
                      onCreate={task => {
                          save(task);
                          setEditTask(null);
                      }}
                      task={editTask}
                      open={formOpen}
                      onClose={() => setFormOpen(false)}
            />
            <ModalQuestion
                open={taskToRemove}
                onYes={() => {
                    remove(taskToRemove);
                    setTaskToRemove(null);
                }}
                onNo={() => {
                    setTaskToRemove(null);
                }}
            >
                Are you sure you want to delete this task?
            </ModalQuestion>
        </>
    );
};

export default App;
