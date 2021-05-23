import {useState, PureComponent} from "react";
import './App.css';
import YearCalendar from "./YearCalendar";

function* generatePrimes(start) {
    const markedNotPrimeMap = new Map();
    let valueToCheck = 2;
    let i = 1;
    while(true) {
        if (!(markedNotPrimeMap.has(valueToCheck))) {
            if (i >= start) {
                yield valueToCheck
            }
            markedNotPrimeMap.set(valueToCheck**2, [valueToCheck])
        } else {
            let primes =markedNotPrimeMap.get(valueToCheck)
            primes.forEach(prime=> {
                let nextMultipleOfPrime = prime + valueToCheck;
                if (markedNotPrimeMap.has(nextMultipleOfPrime)) {
                    markedNotPrimeMap.get(nextMultipleOfPrime).push(prime);
                } else {
                    markedNotPrimeMap.set(nextMultipleOfPrime, [prime]);
                }
            })
            markedNotPrimeMap.delete(valueToCheck);
        }
        valueToCheck += 1
        i++
    }
}

const Widget = ({value}) => <div className='widget'>{value}</div>

class Widgets2 extends PureComponent {
    constructor() {
        super();
        this.setState({widgets: []});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // return nextProps.num !== this.props.num;
        return true;
    }

    componentDidMount() {
        const widgetNum = 0;
        let gen = generatePrimes(1);

        let map = (new Array(this.props.num - widgetNum).fill(0)).map(i => {
            let value = gen.next().value;
            return (
                <Widget
                    value={value}
                />
            );
        });
        let newWidgets = [...((this.state && this.state.widgets) ? this.state.widgets : []), ...map];
        this.setState({widgets: newWidgets});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const widgetNum = (this.state && this.state.widgets) ? this.state.widgets.length : 0;
        if (this.props.num > widgetNum) {
            let gen = generatePrimes(prevProps.num + 1);

            let map = (new Array(this.props.num - widgetNum).fill(0)).map(i => {
                let value = gen.next().value;
                return (
                    <Widget
                        value={value}
                    />
                );
            });
            let newWidgets = [...((this.state && this.state.widgets) ? this.state.widgets : []), ...map];
            this.setState({widgets: newWidgets});
        }
    }

    render() {
        return this.state && this.state.widgets && this.state.widgets.slice(0, this.props.num);
        // let gen = generatePrimes();
        //
        // let map = (new Array(this.props.num).fill(0)).map(i => {
        //     let value = gen.next().value;
        //     return (
        //         <Widget
        //             value={value}
        //         />
        //     );
        // });
        // return map;
    }
}

const Widgets = ({num}) => {
    let gen = generatePrimes();

    let map = (new Array(num).fill(0)).map(i => {
        let value = gen.next().value;
        return (
            <Widget
                value={value}
            />
        );
    });
    return map;
}

function App() {
    const [primes, setPrimes] = useState(1);
    //
    // let gen = generatePrimes();

    // console.time('render')
    // let map = (new Array(primes).fill(0)).map(i => {
    //     let value = gen.next().value;
    //     return (
    //         <Widget
    //             value={value}
    //         />
    //     );
    // });
    // console.timeEnd('render')
    return (
        <div className="App">
            {/*<label htmlFor="primes">Primes ({primes}):</label>*/}
            {/*<br/>*/}
            {/*<input type="range"*/}
            {/*       id="primes"*/}
            {/*       name="primes"*/}
            {/*       min={1}*/}
            {/*       max={10000}*/}
            {/*       value={primes}*/}
            {/*       onChange={evt => setPrimes(parseInt(evt.target.value))}*/}
            {/*       style={{width: 1000}}*/}
            {/*/>*/}
            {/*<br/>*/}
            {/*<Widgets2 num={primes}/>*/}
            <YearCalendar/>
        </div>
    );
}

export default App;
