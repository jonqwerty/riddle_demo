import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import Header from '../components/Header';
import BottomNavigator from '../components/BottomNavigator';
import {Colors} from '../common/style';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <View style={styles.bottomNavigator}>
        <BottomNavigator />
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: Colors.main_bg,
  },

  bottomNavigator: {marginTop: 'auto'},
});
