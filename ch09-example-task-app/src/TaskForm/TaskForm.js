import {useEffect, useRef, useState} from "react";
import Modal from "../Modal";
import useDeepEffect from "../useDeepEffect";
import './TaskForm.css';
import ModalFooter from "../ModalFooter";

const TaskForm = ({task, contexts, onCreate, onClose, open}) => {
    const [id, setId] = useState(task ? task.id : null);
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.title : '');
    const [context, setContext] = useState(task ? task.context : '');
    const firstField = useRef();

    useDeepEffect(() => {
        setId(task && task.id);
        setTitle(task ? task.title : '');
        setDescription(task ? task.description : '');
        setContext(task ? task.context : '');
    }, [task])

    const fieldRendered = firstField.current;
    useEffect(() => {
        setTimeout(() => {
            if (firstField.current) {
                firstField.current.focus();
            }
        }, 100);
    }, [open, fieldRendered]);

    function close() {
        if (onClose) {
            onClose();
        }
        setTitle('')
        setDescription('')
        setContext('')
    }

    return <Modal title='Create or edit a task'
                  role='dialog'
                  open={open} onCancel={close}>
        <form>
            <div className='TaskForm-field'>
                <label htmlFor='title'>Title</label>
                <input name='title'
                       id='title'
                       value={title}
                       ref={firstField}
                       onChange={evt => setTitle(evt.target.value)}
                />
            </div>
            <div className='TaskForm-field'>
                <label htmlFor='description'>Description</label>
                <textarea name='description'
                          id='description'
                          value={description}
                          onChange={evt => setDescription(evt.target.value)}
                />
            </div>
            <div className='TaskForm-field'>
                <label htmlFor='context'>Context</label>
                <select name='context'
                        id='context'
                        value={context}
                        onChange={evt => setContext(evt.target.value)}
                >
                    <option value=''/>
                    {
                        contexts.map(c => <option key={c.value} value={c.value}>{c.name}</option>)
                    }
                </select>
            </div>
        </form>
        <ModalFooter>
            <button onClick={close}>Cancel</button>
            <button onClick={() => {
                onCreate({id, title, description, context});
                close();
            }}
            >Save
            </button>
        </ModalFooter>
    </Modal>
}

export default TaskForm;