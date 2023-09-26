import {Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <Text style={styles.headingText}>Trending Places</Text>
        <FancyCards></FancyCards>
        <Text style={styles.headingText}>Blog Spot</Text>
        <ActionCards></ActionCards>
        <Text style={styles.headingText}>Contact Lists</Text>
        <ContactList></ContactList>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});
export default App;
