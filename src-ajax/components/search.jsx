import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  constructor(props){
    super(props)
    this.searchRef = React.createRef()
    this.search = this.search.bind(this)
  }

  search() {
    const val = this.searchRef.current.value.trim()
    if(val) {
      this.props.setSearchName(val)
      this.searchRef.current.value = ''
    }
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input type="text" placeholder='输入名字' ref={this.searchRef}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

Search.propTypes = {
  setSearchName: PropTypes.func.isRequired
}

export default Search