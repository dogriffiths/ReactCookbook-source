import {forwardRef} from 'react';
import './SkipButton.css';

const SkipButton = forwardRef((props, ref) => {
    const {className, children, onClick, ...others} = props;

    return <div className={`SkipButton ${className || ''}`}
                role='button'
                tabIndex={0}
                ref={ref}
                {...others}
                onKeyDown={evt => {
                    if ((evt.key === 'Enter') || (evt.key === ' ')) {
                        evt.preventDefault();
                        onClick(evt);
                    }
                }}
    >
        {children}
    </div>;
});

export default SkipButton;
