import { Popper } from '@material-ui/core'
import './HelpBubble.css'

const HelpBubble = (props) => {
  const element = props.forElement
    ? document.querySelector(props.forElement)
    : null

  return element ? (
    <Popper
      className="HelpBubble-container"
      open={props.open}
      anchorEl={element}
      placement={props.placement || 'bottom-start'}
    >
      <div className="HelpBubble-close" onClick={props.onClose}>
        Close [X]
      </div>
      {props.content}
      <div className="HelpBubble-controls">
        {props.previousLabel ? (
          <div
            className="HelpBubble-control HelpBubble-previous"
            onClick={props.onPrevious}
          >
            &lt; {props.previousLabel}
          </div>
        ) : (
          <div>&nbsp;</div>
        )}
        {props.nextLabel ? (
          <div
            className="HelpBubble-control HelpBubble-next"
            onClick={props.onNext}
          >
            {props.nextLabel} &gt;
          </div>
        ) : (
          <div>&nbsp;</div>
        )}
      </div>
    </Popper>
  ) : null
}

export default HelpBubble
