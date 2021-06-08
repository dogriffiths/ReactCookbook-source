import { useCallback, useEffect, useState } from 'react'
import FormContext from './FormContext'
import './SimpleForm.css'

const SimpleForm = ({ children, value, onChange, onValid }) => {
  const [values, setValues] = useState(value || {})
  const [dirtyFields, setDirtyFields] = useState({})
  const [invalidFields, setInvalidFields] = useState({})

  useEffect(() => {
    setValues(value || {})
  }, [value])

  useEffect(() => {
    if (onChange) {
      onChange(values)
    }
  }, [onChange, values])

  useEffect(() => {
    if (onValid) {
      onValid(
        Object.keys(invalidFields).every((i) => !invalidFields[i]),
        invalidFields
      )
    }
  }, [onValid, invalidFields])

  const setValue = useCallback(
    (field, v) => setValues((vs) => ({ ...vs, [field]: v })),
    [setValues]
  )
  const getValue = useCallback((field) => values[field], [values])
  const setDirty = useCallback(
    (field) => setDirtyFields((df) => ({ ...df, [field]: true })),
    [setDirtyFields]
  )
  const getDirty = useCallback(
    (field) => Object.keys(dirtyFields).includes(field),
    [dirtyFields]
  )
  const setInvalid = useCallback(
    (field, error) => {
      setInvalidFields((i) => ({
        ...i,
        [field]: error ? error : undefined,
      }))
    },
    [setInvalidFields]
  )
  const form = {
    setValue: setValue,
    value: getValue,

    setDirty: setDirty,
    isDirty: getDirty,

    setInvalid: setInvalid,
  }

  return (
    <div className="SimpleForm-container">
      <FormContext.Provider value={form}>
        {children}
      </FormContext.Provider>
    </div>
  )
}

export default SimpleForm
