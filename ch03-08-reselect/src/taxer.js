import { createSelector } from 'reselect'
import summarizer from './summarizer'

const taxer = createSelector(
  summarizer,
  (summary) => summary.cost * 0.07
)

export default taxer
