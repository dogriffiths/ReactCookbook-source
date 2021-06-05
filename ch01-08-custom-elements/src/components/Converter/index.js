import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import 'style/index.css'

const rates = { gbp: 0.81, eur: 0.92, jpy: 106.64 }

export default ({ currency = 'gbp' }) => {
  const [curr, setCurr] = useState(currency)
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    setCurr(currency)
  }, [currency])

  return (
    <div className="Converter">
      <p>
        <label htmlFor="currency">Currency: </label>
        <select
          name="currency"
          value={curr}
          onChange={(evt) => setCurr(evt.target.value)}
        >
          {Object.keys(rates).map((r) => (
            <option value={r}>{r}</option>
          ))}
        </select>
      </p>
      <p className="Converter-amount">
        <label htmlFor="amount">Amount: </label>
        <input
          name="amount"
          size={8}
          type="number"
          value={amount}
          onInput={(evt) => setAmount(parseFloat(evt.target.value))}
        />
      </p>
      <p>
        Cost:
        {((amount || 0) / rates[curr]).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
    </div>
  )
}
