import React from 'react'

import { mount } from 'enzyme'
import CategorySelect from '../CategorySelect'
import Ionicon from 'react-ionicons'

export const categories = [
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

let props = {
  categories,
  onSelectCategory: jest.fn()
}

let props_with_active = {
  categories,
  onSelectCategory: jest.fn(),
  selectCategory: categories[0]
}

describe('测试分类选择组件(CategorySelect)', () => {
  it('测试是否渲染正确数量的项目...', () => {
    const wrapper = mount(<CategorySelect {...props} />)

    // 是否渲染了正确数量的category-item
    expect(wrapper.find('.category-item').length).toEqual(categories.length)
    // 激活项是否为零
    expect(wrapper.find('.category-item.active').length).toEqual(0)
    // 检查图标是否正常
    const firstIcon = wrapper
      .find('.category-item')
      .first()
      .find(Ionicon)
    expect(firstIcon.length).toEqual(1)
    expect(firstIcon.props().icon).toEqual(categories[0].iconName)
  })

  it('如果选择了某一项，需要高亮', () => {
    const wrapper = mount(<CategorySelect {...props_with_active} />)
    expect(wrapper.find('.category-item').first().hasClass('active')).toEqual(true)
  })

  it('点击某一项后需要添加激活的样式并调用回调',()=>{
    const wrapper = mount(<CategorySelect {...props_with_active} />)

    wrapper.find('.category-item').at(1).simulate('click')
    expect(wrapper.find('.category-item').at(1).hasClass('active')).toEqual(true)
    expect(wrapper.find('.category-item').first().hasClass('active')).toEqual(false)
    // 测试回调
    expect(props_with_active.onSelectCategory).toHaveBeenCalledWith(categories[1])
  })
})
