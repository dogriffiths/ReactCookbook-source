import DeleteIcon from './delete-24px.svg';
import "./Task.css";

const Task = ({task, onDelete, onEdit}) => {
    return <li className='Task'>
        <div className='Task-contents'
             role='button'
             tabIndex={0}
             onClick={onEdit}
             aria-haspopup='dialog'
             onKeyDown={evt => {
                 if ((evt.key === 'Enter') || (evt.key === ' ')) {
                     evt.preventDefault();
                     onEdit();
                 }
             }}
        >
            <div className='Task-details'>
                <div className='Task-title'>
                    {task.title}
                </div>
                <div className='Task-description'>
                    {task.description}
                </div>
            </div>
            <div className='Task-controls'>
                <button
                    onClick={evt => {
                        evt.stopPropagation();
                        evt.preventDefault();
                        onDelete();
                    }}
                    onKeyDown={evt => {
                        if (evt.key === 'Enter') {
                            evt.stopPropagation();
                            evt.preventDefault();
                            onDelete();
                        }
                    }}
                    title='Delete'
                    aria-haspopup='dialog'
                >
                    <img src={DeleteIcon}
                         width={24}
                         height={24}
                         alt='Delete icon'
                    />

                </button>
            </div>
        </div>
    </li>;
};

export default Task;