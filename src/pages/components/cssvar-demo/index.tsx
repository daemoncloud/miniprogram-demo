import { Component } from 'react'
import { View,Text} from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'

// https://www.runoob.com/cssref/func-var.html
// classNames('foo', { bar: true }); // => 'foo bar'

import { AtForm, AtSwitch }  from 'taro-ui'

export default class Index extends Component {

  state = {
    value: false,
  }

  componentDidMount() {}
  componentWillMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  handleChange = value => {
    this.setState({ value })
  }

  render() {
    const {value} = this.state
    return (
      <View className=''>
        <View className='at-article__p'>1.所有页面的顶层元素添加动态classname，然后通过定义不同的顶层classname样式，来展示子元素的样式。</View>
        <View className='at-article__p'>2.var(custom-property-name, value)</View>
        <View className='at-article__p'>custom-property-name	必需。自定义属性的名称，必需以 -- 开头。</View>
        <View className='at-article__p'>value	可选。备用值，在属性不存在的时候使用。</View>
        <View className='at-article__p'>下面例子仅通过两种样式切换来展示</View>
        <AtSwitch title={value ? 'dark' : 'light'} checked={value} onChange={this.handleChange} />
        <View className={classnames({dark:value,light:!value})}>
          <View className='texts'>被改变的style</View>
        </View>
      </View>
    )
  }
}
