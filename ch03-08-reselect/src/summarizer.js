import { createSelector } from 'reselect'

const summarizer = createSelector(
  (state) => state.basket || [],
  (basket) => ({
    itemCount: basket.reduce((i, j) => i + j.quantity, 0),
    cost: basket.reduce((i, j) => i + j.quantity * j.price, 0),
  })
)

export default summarizer
