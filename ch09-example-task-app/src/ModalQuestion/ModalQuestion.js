import Modal from "../Modal";
import ModalFooter from "../ModalFooter";
import './ModalQuestion.css';

function ModalQuestion({children, onYes, onNo, open}) {
    return <Modal title='Question' role='dialog' open={open} onCancel={onNo}>
        <div className='ModalQuestion-text'>
            {children}
        </div>
        <ModalFooter>
            <button onClick={onYes}>Yes</button>
            <button onClick={onNo}>No</button>
        </ModalFooter>
    </Modal>
}

export default ModalQuestion;