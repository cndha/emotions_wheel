import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList  } from 'react-native';
import HoverItem from './HoverItem';
import ART from '@react-native-community/art';
import * as d3 from 'd3';

// const emotionColors = {
//     happy: '#FFFF8E',
//     sad: '#8EBCE1',
//     disgusted: '#8F8F8F',
//     angry: '#FF8E8E',
//     fearful: '#FEE18D',
//     bad: '#8ED9AE',
//     surprised: '#BBA2D0'
// };

const innerData = [
    {emotion: 'happy', value: 22 },
    {emotion: 'sad', value: 15 },
    {emotion: 'disgusted', value: 9 },
    {emotion: 'angry', value: 21 },
    {emotion: 'fearful', value: 15 },
    {emotion: 'bad', value: 9 },
    {emotion: 'surprised', value: 9 },
];

const EmotionsChart = () => {
      
    return(
        <View style={styles.EmotionsChartView}>
        </View>
    )
}

export default EmotionsChart;

const styles = StyleSheet.create({
    EmotionsChartView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    emotionText: {
        textAlign: 'center',
    }

})