import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import EmotionsChart from './components/EmotionsChart'

const emotions = {
  primary: [
    {name: 'Bad', description: ''},
    {name: 'Fearful', description: ''},
    {name: 'Angry', description: ''},
    {name: 'Disgusted', description: ''},
    {name: 'Sad', description: ''},
    {name: 'Happy', description: ''},
    {name: 'Surprised', description: ''},
  ],
  secondary: [
    {parent: 'Sad', name: 'Hurt', description: ''},
    {parent: 'Sad', name: 'Depressed', description: ''},
    {parent: 'Sad', name: 'Guilty', description: ''},
    {parent: 'Sad', name: 'Despair', description: ''},
    {parent: 'Sad', name: 'Vulnerable', description: ''},
    {parent: 'Sad', name: 'Lonely', description: ''},
    {parent: 'Happy', name: 'Optimistic', description: ''},
    {parent: 'Happy', name: 'Trusting', description: ''},
    {parent: 'Happy', name: 'Peaceful', description: ''},
    {parent: 'Happy', name: 'Powerful', description: ''},
    {parent: 'Happy', name: 'Accepted', description: ''},
    {parent: 'Happy', name: 'Proud', description: ''},
    {parent: 'Happy', name: 'Interested', description: ''},
    {parent: 'Happy', name: 'Content', description: ''},
    {parent: 'Happy', name: 'Playful', description: ''},
    {parent: 'Surprised', name: 'Confused', description: ''},
    {parent: 'Surprised', name: 'Amazed', description: ''},
    {parent: 'Surprised', name: 'Confused', description: ''},
    {parent: 'Surprised', name: 'Startled', description: ''},
  ],
  tertiary: [
    {parent: 'Hurt', name: 'Embarrassed', description: ''},
    {parent: 'Hurt', name: 'Dissapointed', description: ''},
    {parent: 'Depressed', name: 'Inferior', description: ''},
    {parent: 'Depressed', name: 'Empty', description: ''},
    {parent: 'Guilty', name: 'Remorseful', description: ''},
    {parent: 'Guilty', name: 'Ashamed', description: ''},
    {parent: 'Despair', name: 'Grief', description: ''},
    {parent: 'Despair', name: 'Powerless', description: ''},
    {parent: 'Vulnerable', name: 'Victimed', description: ''},
    {parent: 'Vulnerable', name: 'Fragile', description: ''},
    {parent: 'Lonely', name: 'Abandoned', description: ''},
    {parent: 'Lonely', name: 'Isolated', description: ''},
    {parent: 'Optimistic', name: 'Inspired', description: ''},
    {parent: 'Optimistic', name: 'Hopeful', description: ''},
    {parent: 'Trusting', name: 'Intimate', description: ''},
    {parent: 'Trusting', name: 'Sensitive', description: ''},
    {parent: 'Peaceful', name: 'Thankful', description: ''},
    {parent: 'Peaceful', name: 'Loving', description: ''},
    {parent: 'Powerful', name: 'Creative', description: ''},
    {parent: 'Powerful', name: 'Courageous', description: ''},
    {parent: 'Accepted', name: 'Valued', description: ''},
    {parent: 'Accepted', name: 'Respected', description: ''},
    {parent: 'Proud', name: 'Confident', description: ''},
    {parent: 'Proud', name: 'Successful', description: ''},
    {parent: 'Interested', name: 'Inquisitive', description: ''},
    {parent: 'Interested', name: 'Curious', description: ''},
    {parent: 'Content', name: 'Joyful', description: ''},
    {parent: 'Content', name: 'Free', description: ''},
    {parent: 'Playful', name: 'Cheeky', description: ''},
    {parent: 'Playful', name: 'Aroused', description: ''},
    {parent: 'Excited', name: 'Eager', description: ''},
    {parent: 'Excited', name: 'Energetic', description: ''},
    {parent: 'Amazed', name: 'Astonished', description: ''},
    {parent: 'Amazed', name: 'Awe', description: ''},
    {parent: 'Confused', name: 'Disillusioned', description: ''},
    {parent: 'Confused', name: 'Perplexed', description: ''},
    {parent: 'Startled', name: 'Shocked', description: ''},
    {parent: 'Startled', name: 'Dismayed', description: ''},
  ],
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap a feeling to learn more</Text>
      <EmotionsChart/>
    </View>
  );
};

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
});
