// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    buttonMode: false,
  }

  changeButtonMode = () => {
    this.setState(prevState => ({buttonMode: !prevState.buttonMode}))
  }

  render() {
    const {buttonMode} = this.state

    const mainBg = buttonMode ? 'light-mode' : 'dark-mode'
    const buttonText = buttonMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="app-container ">
        <div className={`container ${mainBg}`}>
          <h1>Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.changeButtonMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
