import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtGrid} from "taro-ui"
import './index.scss'

import mokeData from '../../moke/mokeData'

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
      default:
        Taro.showToast({title: '暂无配置路由',icon:'none'})
    }
  }

  render () {
    const AtGridList = mokeData.AtGridList;
    return (
      // <View>
      //   <AtGrid mode='rect' columnNum={4} hasBorder={false} data={AtGridList} />
      // </View>
      <ScrollView className='index'>
        <View className='index-title'>Demo</View>
        <View className='index-item' onClick={this.goDemo.bind(this,1)}>贝塞尔曲线</View>
        <View className='index-item' onClick={this.goDemo.bind(this,2)}>mobx</View>
        <View className='index-item' onClick={this.goDemo.bind(this,3)}>react-hook</View>
        <View className='index-item' onClick={this.goDemo.bind(this,4)}>Premise</View>
      </ScrollView>
    )
  }
}

export default Index
