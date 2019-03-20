import React from 'react'
import { connect } from 'react-redux'

import Counter from '../components/counter'
import { increment, decrement, incrementAsync } from '../redux/actions'

export default connect(
  state => ({counter: state}),
  { increment, decrement, incrementAsync }
)(Counter)