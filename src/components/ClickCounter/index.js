// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="counter-heading">
          The button has been clicked <br />
          <span className="count"> {count} </span>
          times
        </h1>
        <p className="counter-description">
          Click the button to increase the count!
        </p>
        <button className="button" onClick={this.onIncrement} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
