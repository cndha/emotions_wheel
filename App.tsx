import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import FeelingItem from './components/FeelingItem'

const App = () => {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tap a feeling to learn more</Text>
      <FeelingItem/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 100,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
})