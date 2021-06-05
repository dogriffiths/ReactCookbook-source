import './ShowData.css'

const ShowData = ({ formFields, valid, errors }) => (
  <div className="ShowData">
    <dl>
      <dt>Current value:</dt>
      <dd>{JSON.stringify(formFields, null, 2)}</dd>
      <dt>Valid?</dt>
      <dd>{JSON.stringify(valid)}</dd>
      <dt>Errors?</dt>
      <dd>{JSON.stringify(errors, null, 2)}</dd>
    </dl>
  </div>
)

export default ShowData
