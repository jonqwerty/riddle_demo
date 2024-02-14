import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
import BottomNavigator from './BottomNavigator';
import {Colors} from '../common/style';
import {MAIN_HORIZONTAL_PADDING} from '../common/constants';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({children}) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg_img.png')}
      resizeMode="cover"
      style={styles.image}>
      <LinearGradient
        colors={[Colors.main_bg_100, Colors.main_bg_200]}
        style={styles.overlay}
        useAngle={true}
        angle={145}
        angleCenter={{x: 0.3, y: 0.5}}>
        <View style={styles.container}>
          <Header />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
            {children}
          </ScrollView>

          <View style={styles.bottomNavigator}>
            <BottomNavigator />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Layout;

const styles = StyleSheet.create({
  image: {flex: 1},

  overlay: {
    flex: 1,
  },

  container: {
    flex: 1,
    marginTop: MAIN_HORIZONTAL_PADDING,
    marginBottom: 30,
  },

  scroll: {marginTop: 5},

  bottomNavigator: {marginTop: 'auto'},
});
