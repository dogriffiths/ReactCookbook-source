import Result from "./Result";

const Info = {
    title: 'Result'
};

export default Info;

export const Basic = () => <Result/>;

export const WithGuess = () => <Result guess={4}/>;

export const WithAnswer = () => <Result answer={2}/>;

export const WithTimedOut = () => <Result timedOut/>;

export const WithMatchedGuessAndAnswer = () => <Result guess={4} answer={4}/>;

export const WithMismatchedGuessAndAnswer = () => <Result guess={4} answer={3}/>;
