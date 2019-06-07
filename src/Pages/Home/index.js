import React, { Component, Fragment } from 'react'
import CategoriesList from '../../components/CategoriesList'
import CadItens from '../../components/CadItens';

class Home extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <CadItens></CadItens>
        </div>
        <div />
      </Fragment>
    )
  }
}
export default Home
