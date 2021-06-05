import './App.css'
import { useState } from 'react'
import useSearch from './useSearch'

const Search = () => {
  const [terms, setTerms] = useState()
  const { data: results } = useSearch(terms)

  return (
    <div className="App">
      <input
        placeholder="Search..."
        type="text"
        value={terms}
        onChange={(e) => setTerms(e.target.value)}
      />
      {results && results.length ? (
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          {results.map((r) => (
            <tr>
              <td>{r.name}</td>
              <td>{r.state}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>No results</p>
      )}
    </div>
  )
}
export default Search
