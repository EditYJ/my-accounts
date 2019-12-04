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
                ? 'rounded-circle active'
                : 'rounded-circle'
            return (
              <div
                className="category-item col-3"
                key={index}
                onClick={event => {
                  this.selectCategory(event, category)
                }}
              >
                <Iconicon
                  className={activeClassName}
                  style={{ border: '#000 1px solid', padding: '5px' }}
                  fontSize="50px"
                  color="#555"
                  icon={category.iconName}
                />
                <br></br>
                <span>{category.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

CategorySelect.protoType = {
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  selectCategory: PropTypes.object.isRequired
}

CategorySelect.defaultProps = {
  onSelectCategory: category => {
    console.log('category', category)
  }
}

export default CategorySelect
