import { Component } from 'react'
import { View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {

  // https://yanziyu.tech/2019/06/27/Bezier-curve/

  state = {
    originLeft: 0,//小球初识定位
    originTop: 0,//小球初识定位
    ballDisplay: false,//小球的控制隐藏
    top: 0,//小球移动轨迹
    left: 0,//小球移动轨迹
  }
  start = false;//防止多次触发

  // 加入购物车动画
  addCart() {
    let that = this;
    // 禁止动画多次触发
    if (this.start) {
      return;
    }
    this.start = true;
    this.setState({
      ballDisplay: true
    }, () => {
      // 获取小球终点位置
      this.getRects(".after-position").then((rect: any) => {
        this.setState({
          top: `${rect.top + 16}px`,
          left: `${rect.left + 16}px`
        });
        // 延时跟动画时长一致，飞完隐藏掉，再把小球重置到初始位置。
        let { originLeft, originTop } = this.state;
        setTimeout(() => {
          that.setState({
            ballDisplay: false,
            top: originTop,
            left: originLeft
          }, () => {
            that.start = false;
          });
        }, 1000);
      });
    });
  }
  //获取位置方法
  getRects(cls) {
    return new Promise((resolve, reject) => {
      Taro.createSelectorQuery()
        .select(cls)
        .boundingClientRect(function (rect) {
          console.log(rect);
          resolve(rect);
        })
        .exec();
    });
  }
  //初始化运动小球位置
  initBallPos() {
    this.getRects(".before-position").then((rect: any) => {
      this.setState({
        top: `${rect.top + 5}px`,
        left: `${rect.left + 30}px`,
        originTop: `${rect.top + 5}px`,
        originLeft: `${rect.left + 30}px`
      });
    });
  }
  componentDidMount() {
    // 获取小球最开始的位置
    this.initBallPos();
    this.start = false;
  }
  componentWillMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  render() {
    const { ballDisplay, left, top, originTop, originLeft } = this.state;
    console.log(ballDisplay, originTop, originLeft, '----data')
    return (
      <View>
        {ballDisplay && <View className="ball" style={`top:${top};left:${left}`}></View>}
        <View className="btn-add-cart before-position" onClick={this.addCart.bind(this)}>加入购物车动画</View>
        <View className="bottom-bar">
          <View id="icon" className="icon after-position"></View>
        </View>
      </View>
    )
  }
}
