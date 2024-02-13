import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Navigation from './src/navigation/Navigation';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
