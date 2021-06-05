import { useState } from 'react'
import SimpleForm, { InputField } from './SimpleForm'

export default {
  component: SimpleForm,
  title: 'SimpleForm',
}

export const Basic = () => <SimpleForm />

export const WithFields = () => (
  <SimpleForm>
    <label htmlFor="address">Address:</label>
    <InputField
      name="address"
      onValidate={(v) => (v && v.length >= 3) || 'Too short!'}
    />
  </SimpleForm>
)

export const WithOnChangeAndValue = () => {
  const [formFields, setFormFields] = useState({
    address1: 'Somewhere',
    address2: '',
  })

  const [valid, setValid] = useState(true)
  const [errors, setErrors] = useState({})

  return (
    <SimpleForm
      value={formFields}
      onChange={setFormFields}
      onValid={(v, errs) => {
        setValid(v)
        setErrors(errs)
      }}
    >
      <label htmlFor="address1">Address:</label>
      <InputField
        name="address1"
        onValidate={(v) => v.length < 3 && 'Too short!'}
      />
      <label htmlFor="address2">Address:</label>
      <InputField
        name="address2"
        onValidate={(v) => (v ? null : 'Required')}
      />
      <label htmlFor="price">Price:</label>
      <InputField
        name="price"
        type="number"
        onValidate={(v) =>
          v && parseInt(v) < 102 ? 'Must be at least 102' : null
        }
      />
      <label htmlFor="requiredBy">Required by:</label>
      <InputField
        name="requiredBy"
        type="date"
        onValidate={(v) => (v ? null : 'Required')}
      />
      <button disabled={!valid}>Submit!</button>
      <br />
      Current value: {JSON.stringify(formFields)}
      <br />
      Valid?: {JSON.stringify(valid)}
      <br />
      Errors?: {JSON.stringify(errors)}
    </SimpleForm>
  )
}
