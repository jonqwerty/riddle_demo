import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <View style={styles.bottomNavigator}>
        <BottomNavigation />
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 40, marginTop: 40, marginBottom: 30},
  bottomNavigator: {marginTop: 'auto'},
});
