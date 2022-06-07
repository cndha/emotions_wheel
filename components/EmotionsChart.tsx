import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList  } from 'react-native';
import HoverItem from './HoverItem';
import * as d3 from 'd3';
// import ART from '@react-native-community/art';
import { Surface, Shape, Group } from '@react-native-community/art';
import Svg, { Path } from "react-native-svg";
import { data } from '../data'

// interface EmotionsChartProps {
//     emotion: string;
//     value: number;
// };

// const emotionColors = {
//     happy: '#FFFF8E',
//     sad: '#8EBCE1',
//     disgusted: '#8F8F8F',
//     angry: '#FF8E8E',
//     fearful: '#FEE18D',
//     bad: '#8ED9AE',
//     surprised: '#BBA2D0'
// };

// const EmotionsChart: FC<EmotionsChartProps> = ({ emotion, value }) => {
const EmotionsChart = () => {    
    // const innerData = [
    //     {emotion: 'happy', value: 22 },
    //     {emotion: 'sad', value: 15 },
    //     {emotion: 'disgusted', value: 9 },
    //     {emotion: 'angry', value: 21 },
    //     {emotion: 'fearful', value: 15 },
    //     {emotion: 'bad', value: 9 },
    //     {emotion: 'surprised', value: 9 },
    // ];

    // const arcs = d3.pie().value(d => d.value)(innerData);
    // const path = d3.arc().outerRadius(100).padAngle(.05).innerRadius(30);

    return(
        <View style={styles.EmotionsChartView}>
            <Text>{data.emotion}</Text>
            {/* <Surface width={200} height={200}>
                <Group x={200/2} y={200/2}>
                    {arcs.map(arc => (
                            <Shape
                                key={arc.index}
                                d={path(arc)}
                                fill={'pink'}
                                strokeWidth={1}
                            />
                        ))
                    }
                </Group>
            </Surface> */}
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