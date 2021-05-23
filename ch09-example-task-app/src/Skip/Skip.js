import {useRef, useState} from "react";
import {focusNextElement, focusPreviousElement} from "./focusNextElement";
import SkipButton from "../SkipButton";
import "./Skip.css";

const Skip = ({children, name}) => {
    const startButton = useRef();
    const endButton = useRef();
    const [inside, setInside] = useState(false);

    const skipAfter = () => {
        if (endButton.current) {
            endButton.current.focus();
            focusNextElement();
        }
    };
    const skipBefore = () => {
        if (startButton.current) {
            startButton.current.focus();
            focusPreviousElement();
        }
    };

    return <div className='Skip'
                onFocus={(evt) => {
                    if ((evt.target !== startButton.current)
                        && (evt.target !== endButton.current)) {
                        setInside(true);
                    }
                }}
                onBlur={(evt) => {
                    if ((evt.target !== startButton.current)
                        && (evt.target !== endButton.current)) {
                        setInside(false);
                    }
                }}
    >
        <SkipButton
            ref={startButton}
            tabIndex={inside ? -1 : 0}
            onClick={skipAfter}
        >
            Skip {name}
        </SkipButton>
        {children}
        <SkipButton
            className='Skip-navigation-end'
            ref={endButton}
            tabIndex={inside ? -1 : 0}
            onClick={skipBefore}
        >
            Skip before {name}
        </SkipButton>
    </div>;
};

export default Skip;