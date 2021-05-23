import Question from "./Question";

const sinon = require('sinon');

sinon.stub(Math, 'random').returns(0.2);

const Info = {
    title: 'Question'
};

export default Info;

export const Basic = () => <Question/>;

export const WithDisabled = () => <Question disabled/>;
