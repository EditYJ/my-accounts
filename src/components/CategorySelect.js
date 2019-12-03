import React, { Component } from 'react'
import Iconicon from 'react-ionicons'
import PropTypes from 'prop-types'

class CategorySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectCategoryId: props.selectCategory && props.selectCategory.id
    }
  }

  selectCategory = (event, category) => {
    this.setState({
      selectCategoryId: category.id
    })
    this.props.onSelectCategory(category)
    event.preventDefault()
  }

  render() {
    const { categories } = this.props
    const { selectCategoryId } = this.state
    return (
      <div className="category-select-component">
        <div className="row">
          {categories.map((category, index) => {
            const activeClassName =
              selectCategoryId === category.id
                ? 'category-item col-3 active'
                : 'category-item col-3'
            return (
              <div
                className={activeClassName}
                key={index}
                onClick={event => {
                  this.selectCategory(event, category)
                }}
              >
                <Iconicon
                  className="rounded-circle"
                  fontSize="50px"
                  color="#555"
                  icon={category.iconName}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CategorySelect
