import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.searchName = React.createRef()
  }
  search = () => {
    const searchName = this.searchName.current.value.trim()
    if(searchName) {
      // this.props.setSearchName(searchName)
      // 发布消息(search)
      PubSub.publish('search', searchName)

      this.searchName.current.value = ''
    }

  }

  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={this.searchName}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}