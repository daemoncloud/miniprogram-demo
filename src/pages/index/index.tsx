import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goDemo(n){
    switch(n){
      case 1:
        Taro.navigateTo({url:'../components/bezier-demo/index'});
        break
      case 2:
        Taro.navigateTo({url:'../components/mobx-demo/index'});
        break
    }
  }

  render () {
    return (
      <ScrollView className='index'>
        <View className='indexItem' onClick={this.goDemo.bind(this,1)}>贝塞尔曲线</View>
        <View className='indexItem' onClick={this.goDemo.bind(this,2)}>mobx-demo</View>
      </ScrollView>
    )
  }
}

export default Index
