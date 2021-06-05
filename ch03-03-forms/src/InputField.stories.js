import SimpleForm from './SimpleForm'
import InputField from './InputField'

export default {
  component: InputField,
  title: 'InputField',
}

export const NoForm = () => <InputField name="field1" />

export const Basic = () => (
  <SimpleForm>
    <InputField name="field1" />
  </SimpleForm>
)

export const Number = () => (
  <SimpleForm>
    <InputField name="field1" type="number" />
  </SimpleForm>
)

export const Date = () => (
  <SimpleForm>
    <InputField name="field1" type="date" />
  </SimpleForm>
)

export const WithLabel = () => (
  <SimpleForm>
    <InputField name="field1" label="First field" />
  </SimpleForm>
)

export const WithOnValidate = () => (
  <SimpleForm>
    <InputField
      name="field1"
      onValidate={(v) =>
        !v || v.length < 3 ? 'Must be at least 3 chars.' : null
      }
    />
  </SimpleForm>
)
