import React, {Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component {

  state = {
    firstView: true, // 是否是第一个页面
    loading: false, // 是否正在请求中
    users: [], // 用户列表数据
    errorMsg: '', // 错误提示信息
  }


  // 初始化显示后执行一次
  componentDidMount () {
    // 订阅消息
    PubSub.subscribe('search', (msg, searchName) => {
      // 更新状态(请求中)
      this.setState({
        firstView: false,
        loading: true
      })
      // 发ajax请求进行搜索获取users数据
      this.ajaxUsers(searchName)
    })
  }
  async ajaxUsers(searchName) {
    const url = `http://api.github.com/search/users?q=${searchName}`
    try {
      const usersData = await axios.get(url)
      const users = usersData.data.items.map(item => {
        return {
          url: item.html_url,
          header_url: item.avatar_url,
          name: item.login
        }
      })
      this.setState({
        loading: false,
        users
      })
    } catch (err) {
      console.log('err')
    }
  }
  render () {
    const {firstView, loading, users, errorMsg} = this.state
    if(firstView) {
      return <h2>请输入关键字搜索: {this.props.searchName}</h2>
    } else if (loading) {
      return <h2>正在加载中...</h2>
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) =>(
              <div className="card">
                <a href={user.url} target="_blank">
                  <img src={user.header_url} style={{width: 100}}/>
                </a>
                <p className="card-text">{user.name}</p>
              </div>
            ))
          }
        </div>
      )
    }
  }
}