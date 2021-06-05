import { useState } from 'react'
import './App.css'
import FormExample0 from './FormExample0'
import FormExample1 from './FormExample1'
import ShowData from './ShowData'

const onSubmit = (v) =>
  alert('Submit value: ' + JSON.stringify(v, null, 2))

function App() {
  const [formFields, setFormFields] = useState({})
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState()
  const [firstForm, setFirstForm] = useState(true)

  return (
    <div className="App">
      <nav>
        <select
          onChange={(evt) =>
            setFirstForm(evt.target.value === 'first')
          }
        >
          <option value="first">Single field</option>
          <option value="second">Multiple fields</option>
        </select>
      </nav>
      <main>
        {firstForm ? (
          <FormExample0
            onChange={(ff, v, e) => {
              setFormFields(ff)
              setValid(v)
              setErrors(e)
            }}
            onSubmit={onSubmit}
            initialValue={{
              field1: 'Some stuff',
            }}
          />
        ) : (
          <FormExample1
            onChange={(ff, v, e) => {
              setFormFields(ff)
              setValid(v)
              setErrors(e)
            }}
            onSubmit={onSubmit}
            initialValue={{
              address1: '1 Main Street',
            }}
          />
        )}

        <ShowData
          formFields={formFields}
          errors={errors}
          valid={valid}
        />
      </main>
    </div>
  )
}

export default App
