import { useEffect, useState } from 'react'
import './App.css'
import SimpleForm from './SimpleForm'
import InputField from './InputField'

const FormExample0 = ({ onSubmit, onChange, initialValue = {} }) => {
  const [formFields, setFormFields] = useState(initialValue)

  const [valid, setValid] = useState(true)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (onChange) {
      onChange(formFields, valid, errors)
    }
  }, [onChange, formFields, valid, errors])

  return (
    <div className="TheForm">
      <h1>Single field</h1>

      <SimpleForm
        value={formFields}
        onChange={setFormFields}
        onValid={(v, errs) => {
          setValid(v)
          setErrors(errs)
        }}
      >
        <InputField
          name="field1"
          onValidate={(v) =>
            !v || v.length < 3 ? 'Too short!' : null
          }
        />

        <button
          onClick={() => onSubmit && onSubmit(formFields)}
          disabled={!valid}
        >
          Submit!
        </button>
      </SimpleForm>
    </div>
  )
}

export default FormExample0
