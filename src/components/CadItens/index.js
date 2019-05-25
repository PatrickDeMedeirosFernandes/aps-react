import React, { Component } from 'react'
import './itens.css'


class CadItens extends Component {
  state = {
    task: '',
    list: []
  }
  handleChange = event => {
    this.setState({
      task: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    const { task, list } = this.state
    this.setState({
      list: [task, ...list],
      task: ''
    })
  }

  handleClick = index => {
    this.setState({
      list: this.state.list.filter((item, i) => {
        return index !== i
      })
    })
  }


  render() {
    const { task, list } = this.state
    // console.log(list)
    //console.log(task)
    //CONSOLE VERIFICA SE TA INDO 

    return (
      <div className='container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label className='input-container' htmlFor='#tarefa'>
            Tarefa:


            <select>
              <option>s</option>
            </select>

            <input id='tarefa'
              value={task}
              onChange={this.handleChange}
            />

            <button className='btn'>+</button>
          </label>
          <ul className='list'>
            {
              list.map((item, index) =>
                <li
                  onClick={() => this.handleClick(index)}
                  className='list-item' key={index}>
                  {item}
                </li>

              )
            }
          </ul>
        </form>
      </div>
    )
  }
}

export default CadItens