import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

class Index extends Component {

  state={}

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
      case 3:
        Taro.navigateTo({url:'../components/hooks-demo/index'});
        break
      case 4:
        Taro.navigateTo({url:'../components/premise-demo/index'});
        break
      case 5:
        Taro.navigateTo({url:'../components/cssvar-demo/index'});
        break
      default:
        Taro.showToast({title: '暂无配置路由',icon:'none'})
    }
  }

  render () {
    // const AtGridList = mokeData.AtGridList;
    return (
      <ScrollView className='index'>
        <View className='index-title'>Demo</View>
        <View className='index-item' onClick={this.goDemo.bind(this,1)}>贝塞尔曲线</View>
        <View className='index-item' onClick={this.goDemo.bind(this,2)}>mobx</View>
        <View className='index-item' onClick={this.goDemo.bind(this,3)}>react-hook</View>
        <View className='index-item' onClick={this.goDemo.bind(this,4)}>Premise</View>
        <View className='index-item' onClick={this.goDemo.bind(this,5)}>小程序中使用 css-var && classnames实现换肤</View>
      </ScrollView>
    )
  }
}

export default Index
