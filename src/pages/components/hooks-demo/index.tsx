import React, { useState,useEffect } from 'react';
import { View } from '@tarojs/components'
import { AtButton} from "taro-ui"

// https://react.docschina.org/docs/hooks-state.html

export default function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [effecNum, setEffecNum] = useState(0);

  // React 组件在渲染后执行某些操作
  useEffect(() => {
    setEffecNum(count)
    console.log(`${effecNum},React 组件在渲染后执行某些操作`)
  });
  // 仅在 count 更改时更新
  useEffect(() => {
    setEffecNum(count)
    console.log(`${effecNum},仅在 count 更改时更新`)
  }, [count]);
  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行）,可以传递一个空数组（[]）
  useEffect(() => {
    setEffecNum(count)
    console.log(`${effecNum},如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行）,可以传递一个空数组（[]）`)
  }, []); 

  return (
    <View>
        <View className='at-article__p'>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性 </View>
        
        <AtButton onClick={() => setCount(count + 1)}>
          Click me
        </AtButton>
        <View className='at-article__p'>You clicked {count} times</View>
        <View className='at-article__p'>useEffect见打印信息</View>
    </View>
  );
}


