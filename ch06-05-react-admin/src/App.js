import './App.css'
import {
  Admin,
  Create,
  Datagrid,
  Filter,
  List,
  Resource,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import buildGraphQLProvider from 'ra-data-graphql-simple'
import { useEffect, useState } from 'react'

const CreateMessage = (props) => {
  return (
    <Create title="Create a Message" {...props}>
      <SimpleForm>
        <TextInput source="author" />
        <TextInput multiline source="text" />
      </SimpleForm>
    </Create>
  )
}

const MessageFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Author" source="author" />
    <TextInput label="Text" source="text" />
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
)

const ListMessages = (props) => {
  return (
    <List {...props} filters={<MessageFilter />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="author" />
        <TextField source="text" />
      </Datagrid>
    </List>
  )
}

function App() {
  const [dataProvider, setDataProvider] = useState()

  useEffect(() => {
    ;(async () => {
      const dp = await buildGraphQLProvider({
        clientOptions: { uri: 'http://localhost:5000' },
      })
      setDataProvider(() => dp)
    })()
  }, [])

  return (
    <div className="App">
      {dataProvider && (
        <Admin dataProvider={dataProvider}>
          <Resource
            name="Message"
            list={ListMessages}
            create={CreateMessage}
          />
        </Admin>
      )}
    </div>
  )
}

export default App
