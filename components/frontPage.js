import React, {Component} from 'react'
import NikeTN from './nikeTN.js'

class FrontPage extends Component{

  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div className="blah">
            <h2>eMazon-Me</h2>
          <div className='search'>
              <form>
                <input className= 'search-bar' type="text" placeholder="Search..." required />
                <input className= 'search-bttn' type="button" value="Search" />
              </form>
            </div>

            <div className='nikeTN'> <NikeTN /> </div>
            <div className='addidas'></div>
            <div className='hp'></div>
            <div className='beats'></div>
        </div>
    )
  }
}

export default FrontPage
