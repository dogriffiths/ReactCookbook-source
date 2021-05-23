import './Modal.css';
import ReactFocusLock from "react-focus-lock";

function Modal({open, onCancel, children, role, title}) {
    if (!open) {
        return null;
    }

    return <div role='presentation' className='Modal'
                onClick={() => {
                    if (onCancel) {
                        onCancel();
                    }
                }}
    >
        <div className='Modal-dialog'
             role={role} title={title}
             onClick={(evt) => evt.stopPropagation()}
             onKeyDown={evt => {
                 if (evt.key === 'Escape') {
                     onCancel();
                 }
             }}
        >
            <ReactFocusLock>
                {children}
            </ReactFocusLock>
        </div>
    </div>
}

export default Modal;