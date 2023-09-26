import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={
        (isDarkMode ? styles.whiteText : styles.blackText, styles.container)
      }>
      <View style={styles.topMenu}>
        <Text style={styles.headerText}>Hello World</Text>
        <Text style={styles.headerText}>=</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  topMenu: {
    width: '100%',
    height: 50,
    backgroundColor: '#B1B1B1',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {},
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});
export default AppPro;
