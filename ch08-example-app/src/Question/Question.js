import {useEffect, useState} from 'react';
import './Question.css';

const RANGE = 10;

function rand() {
    return Math.floor((Math.random() * RANGE) + 1);
}

const Question = ({onAnswer, refreshTime, disabled}) => {
    const [pair, setPair] = useState();
    const result = pair && (pair[0] * pair[1]);

    useEffect(() => {
        // We need to check to avoid an error
        if (onAnswer && result) {
            onAnswer(result);
        }
    }, [onAnswer, result]);

    const refresh = () => {
        setPair(pair => {
            return [rand(), rand()];
        });
    };

    useEffect(refresh, [refreshTime]);

    return <div className='Question'>
        <div className='Question-detail'>
            <div data-testid='number1' className='number1'>{pair && pair[0]}</div>
            &times;
            <div data-testid='number2' className='number2'>{pair && pair[1]}</div>
            ?
        </div>
        <button
            onClick={refresh}
            disabled={disabled}
        >Refresh
        </button>
    </div>;
};

export default Question;