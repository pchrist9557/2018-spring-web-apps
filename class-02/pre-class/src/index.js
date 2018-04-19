import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <div>
      <HelloToSomeone someone="Zach" />
      <HabitInput msg="I came from props!"/>
    </div>
  )
}

const HelloToSomeone = (props) => {
  return <h1> hello {props.someone}, welcome to our habit tracker!</h1>
}

class HabitInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'I came from state!',
      habitName: ''
    }
  }

  handleHabitChange = (event) => {
    this.setState({habitName: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h2> class based! </h2>
        <p> class based components can put state and props on the page!</p>
        <p>{this.state.msg}</p>
        <p>{this.props.msg}</p>

        <p>ohhhh weee, here comes a form!</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Habit Name:
            <input type="text" value={this.state.habitName} onChange={this.handleHabitChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
