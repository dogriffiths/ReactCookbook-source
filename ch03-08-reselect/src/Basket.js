import { useDispatch, useSelector } from 'react-redux'

import './Basket.css'
import summarizer from './summarizer'
import taxer from './taxer'

const Basket = () => {
  const basket = useSelector((state) => state.basket)
  const { itemCount, cost } = useSelector(summarizer)
  const tax = useSelector(taxer)
  const dispatch = useDispatch()

  return (
    <div className="Basket">
      <h2>Basket</h2>
      {basket && basket.length ? (
        <>
          {basket.map((item) => (
            <div className="Basket-item">
              <div className="Basket-itemName">{item.name}</div>
              <div className="Basket-itemProductId">
                {item.productId}
              </div>
              <div className="Basket-itemPricing">
                <div className="Basket-itemQuantity">
                  {item.quantity}
                </div>
                <div className="Basket-itemPrice">{item.price}</div>
              </div>
            </div>
          ))}
          <p>{itemCount} items</p>
          <p>Total: ${cost.toFixed(2)}</p>
          <p>Sales tax: ${tax.toFixed(2)}</p>
          <button onClick={() => dispatch({ type: 'clearBasket' })}>
            Clear
          </button>
        </>
      ) : (
        'Empty'
      )}
    </div>
  )
}

export default Basket
