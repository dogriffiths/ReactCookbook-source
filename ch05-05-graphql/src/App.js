import logo from './logo.svg';
import './App.css';

/*
mutation AddMessage(
    $author: String!
    $text: String!
  ) {
    addMessage(
      author: $author
      text: $text
    ) {
       author
      text
    }
  }

  {
  "author": "David Griffiths",
  "text": "This is a new message"
}
 */

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Forum from "./Forum";

const client = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
        <ApolloProvider client={client}>
            <Forum/>
        </ApolloProvider>
    </div>
  );
}

export default App;
