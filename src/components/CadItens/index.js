import React, { Component } from 'react'
import './itens.css'
import CategoriesList from '../../components/CategoriesList'


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
    console.log(list)
    //console.log(task)
    //CONSOLE VERIFICA SE TA INDO 
    //<select>
    //            <option value={list}>s</option>
    //            </select>

    return (
      <div className='container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label className='input-container' htmlFor='#tarefa'>


Categoria:
            <CategoriesList />

Item:
            <input id='tarefa'
              value={task}
              onChange={this.handleChange}
            />
            <br></br>

            <button className='btn'>+</button>
          </label>







          <table className="width:100%">
            <tr>
              <th>Item</th>
              <th>Categoria</th>
            </tr>

            {


              list.map((item, index) =>
                <tr>
                  <td onClick={() => this.handleClick(index)}
                    className='list-item' key={index}
                  >
                    {item}
                  </td>

                  <td>{list}</td>
                </tr>



              )


            }


          </table>

        </form>
      </div>
    )
  }
}

export default CadItens