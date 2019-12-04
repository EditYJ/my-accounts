import React, { Component } from 'react'
import CategorySelect from '../components/CategorySelect'

const categories = [
  {
    id: '1',
    name: '旅行',
    type: 'income',
    iconName: 'ios-plane'
  },
  {
    id: '2',
    name: '学习',
    type: 'income',
    iconName: 'ios-plane'
  },
  {
    id: '3',
    name: '理财',
    type: 'income',
    iconName: 'ios-plane'
  },
  {
    id: '4',
    name: '理财',
    type: 'income',
    iconName: 'ios-plane'
  }
]
class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <CategorySelect
          categories={categories}
          onSelectCategory={category => {
            console.log('category', category, this.props.match)
          }}
          selectCategory={categories[0]}
        ></CategorySelect>
      </React.Fragment>
    )
  }
}

export default Create
