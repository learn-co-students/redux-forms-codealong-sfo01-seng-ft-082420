import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
	};

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <p>
            <label>todo</label>
            <input type='text' onChange={this.handleChange} value = {this.state.text}/>
          </p>
          <input type='submit'/>
        </form>
        {this.state.text}
      </div>
    
    )
  }
  
}

const mapDispatchToProps = dispatch => ({
	addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
});


export default  connect(null, mapDispatchToProps)(CreateTodo);
