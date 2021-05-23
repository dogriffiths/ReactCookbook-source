import './Result.css';

const Result = ({guess, answer, onPlayAgain, timedOut}) => {
    return <div className='Result'>
        <div className='Result-details'>{
            timedOut
                ? 'You are out of time!'
                : guess === answer
                ? 'You have Won!'
                : 'You have Lost!'
        }</div>
        <button
            onClick={onPlayAgain}
        >Play again
        </button>
    </div>
};

export default Result;