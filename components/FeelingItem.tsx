import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HoverItem from './HoverItem'

const FeelingItem = () => {

    const feelingsColors = {
        happy: '#FFFF8E',
        sad: '#8EBCE1',
        disgusted: '#8F8F8F',
        angry: '#FF8E8E',
        fearful: '#FEE18D',
        bad: '#8ED9AE',
        surprised: '#BBA2D0'
    }

    return(
        <View style={styles.feelingItemView}>
            <View style={{backgroundColor:'#FFFF8E', height: 50, width: 100}}>
                <Text style={styles.feelingText}>Happy</Text>
            </View>
            <View style={{backgroundColor:'#8EBCE1', height: 50, width: 100}}>
                <Text style={styles.feelingText}>Sad</Text>
            </View>
        </View>
    )
}

export default FeelingItem;

const styles = StyleSheet.create({
    feelingItemView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    feelingText: {
        color: 'black',
        textAlign: 'center',
    }

})