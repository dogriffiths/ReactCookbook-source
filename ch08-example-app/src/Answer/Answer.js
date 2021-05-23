import {useState} from 'react';
import './Answer.css';

const Answer = ({onGuess, disabled}) => {
    const [guess, setGuess] = useState('');

    return <div className='Answer'>
        <label htmlFor='guess'>Guess:</label>
        <input
            type='number'
            autoFocus={true}
            id='guess'
            value={guess}
            onChange={evt => {
                setGuess(parseFloat(evt.target.value));
            }}
            disabled={disabled}
        />
        <button
            onClick={() => {
                onGuess(guess);
                setGuess('');
            }}
            disabled={disabled}
        >Submit
        </button>
    </div>;
};

export default Answer;