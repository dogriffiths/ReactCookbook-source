import React, {useCallback, useEffect, useState} from "react";

import './SimpleForm.css';
import FormContext from "./FormContext";

function updateWith(oldValue, field, value) {
    const newValue = {...oldValue};
    newValue[field] = value;
    return newValue;
}

export default ({children, value, onChange, onValid}) => {
    const [values, setValues] = useState(value || {});
    const [dirtyFields, setDirtyFields] = useState({});
    const [invalidFields, setInvalidFields] = useState({});

    useEffect(() => {
        setValues(value || {});
    }, [value]);

    useEffect(() => {
        if (onChange) {
            onChange(values);
        }
    }, [onChange, values]);

    useEffect(() => {
        if (onValid) {
            onValid(Object.keys(invalidFields).every(i => !invalidFields[i]), invalidFields);
        }
    }, [onValid, invalidFields]);

    let setValue = useCallback((field, v) => setValues(vs => updateWith(vs, field, v)), [setValues]);
    let getValue = useCallback(field => values[field], [values]);
    let setDirty = useCallback((field) => setDirtyFields(df => updateWith(df, field, true)), [setDirtyFields]);
    let getDirty = useCallback((field) => Object.keys(dirtyFields).includes(field), [dirtyFields]);
    let setInvalid = useCallback((field, error) => {
        setInvalidFields(i => updateWith(i, field, error ? error : undefined));
    }, [setInvalidFields]);
    let form = {
        setValue: setValue,
        value: getValue,

        setDirty: setDirty,
        isDirty: getDirty,

        setInvalid: setInvalid,
    };

    return <div className='SimpleForm-container'>
        <FormContext.Provider value={form}>
            {children}
        </FormContext.Provider>
    </div>;
}
