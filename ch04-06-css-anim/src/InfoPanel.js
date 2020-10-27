import React, {useState} from 'react';

import './InfoPanel.css';

export default ({title, children}) => {
    const [open, setOpen] = useState(false);

    return <section className='InfoPanel'>
        <h1>
            {title}
            <button onClick={() => setOpen(v => !v)}>
                {open ? '🔼' : '​🔽'}
            </button>
        </h1>
        <div className={`InfoPanel-details ${(open ? '' : 'InfoPanel-details-closed')}`}>
            {children}
        </div>
    </section>
}