import React from 'react';
import { View } from 'react-native';

export default function Ex01() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', paddingVertical: 20 }}>
      
      {/* ส่วนที่ 1 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ width: 80, height: 80, backgroundColor: '#50E3C2' }} />
        <View style={{ width: 80, height: 80, backgroundColor: '#50E3C2' }} />
        <View style={{ width: 80, height: 80, backgroundColor: '#50E3C2' }} />
      </View>

      {/* ส่วนที่ 2 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ width: 80, height: 80, backgroundColor: '#4A90E2' }} />
        <View style={{ width: 80, height: 80, backgroundColor: '#4A90E2' }} />
        <View style={{ width: 80, height: 80, backgroundColor: '#4A90E2' }} />
      </View>

      {/* ส่วนที่ 3 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ width: 80, height: 80, backgroundColor: '#9013FE' }} />
        <View style={{ width: 80, height: 80, backgroundColor: '#9013FE' }} />
        <View style={{ width: 80, height: 80, backgroundColor: '#9013FE' }} />
      </View>

    </View>
  );
}