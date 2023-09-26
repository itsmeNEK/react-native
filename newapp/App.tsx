import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.topMenu}>
        <Text>MyApp</Text>
      </View>
      <View>
        <Button
          title="Click me!"
          onPress={() => {
            Alert.alert('test1', 'message');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topMenu: {
    height: 50,
    backgroundColor: 'dodgerblue',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default App;
