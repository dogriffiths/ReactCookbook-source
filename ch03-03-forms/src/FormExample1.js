import { useEffect, useState } from 'react'
import './App.css'
import SimpleForm from './SimpleForm'
import InputField from './InputField'

const FormExample1 = ({ onSubmit, onChange, initialValue = {} }) => {
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
      <h1>Multiple fields</h1>

      <SimpleForm
        value={formFields}
        onChange={setFormFields}
        onValid={(v, errs) => {
          setValid(v)
          setErrors(errs)
        }}
      >
        <InputField
          name="address1"
          onValidate={(v) =>
            !v || v.length < 3 ? 'Too short!' : null
          }
        />

        <InputField
          name="address2"
          onValidate={(v) => (v ? null : 'Required')}
        />

        <InputField
          name="address3"
          onValidate={(v) => (v ? null : 'Required')}
        />

        <InputField
          name="address4"
          onValidate={(v) => (v ? null : 'Required')}
        />

        <InputField
          name="price"
          type="number"
          onValidate={(v) =>
            !v || parseInt(v) < 102 ? 'Must be at least 102' : null
          }
        />

        <InputField
          name="requiredBy"
          type="date"
          onValidate={(v) => (v ? null : 'Required')}
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

export default FormExample1
