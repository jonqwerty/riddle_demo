import {FC} from 'react';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList, Screen} from '../common/enums';
import {Colors, FontFamily} from '../common/style';
import IcHome from '../icons/IcHome';
import IcLeaderboard from '../icons/IcLeaderboard';
import IcSettings from '../icons/IcSettings';
import {MAIN_HORIZONTAL_PADDING, SCREEN_WIDTH} from '../common/constants';

const BottomNavigator: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  const handleHomeScreen = () => {
    navigation.navigate(Screen.Home, {});
  };

  const handleLeaderboardScreen = () => {
    navigation.navigate(Screen.Leaderboard, {});
  };

  const handleSettingsScreen = () => {
    navigation.navigate(Screen.Settings, {});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleHomeScreen}>
        {route.name === Screen.Home ? (
          <IcHome fill={Colors.grey_200} opacity={1} />
        ) : (
          <IcHome fill={Colors.grey_100} opacity={0.66} />
        )}

        <Text
          style={
            route.name === Screen.Home
              ? styles.textChoosen
              : styles.textNotChoosen
          }>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleLeaderboardScreen}>
        {route.name === Screen.Leaderboard ? (
          <IcLeaderboard fill={Colors.grey_200} opacity={1} />
        ) : (
          <IcLeaderboard fill={Colors.grey_100} opacity={0.66} />
        )}

        <Text
          style={
            route.name === Screen.Leaderboard
              ? styles.textChoosen
              : styles.textNotChoosen
          }>
          Leaderboard
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleSettingsScreen}>
        {route.name === Screen.Settings ? (
          <IcSettings fill={Colors.grey_200} opacity={1} />
        ) : (
          <IcSettings fill={Colors.grey_100} opacity={0.66} />
        )}

        <Text
          style={
            route.name === Screen.Settings
              ? styles.textChoosen
              : styles.textNotChoosen
          }>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: SCREEN_WIDTH - 2 * MAIN_HORIZONTAL_PADDING,
    alignSelf: 'center',
  },

  item: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textChoosen: {
    marginTop: 20,
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.grey_200,
    lineHeight: 11,
    fontSize: 10,
    fontWeight: '600',
  },

  textNotChoosen: {
    marginTop: 20,
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.grey_100,
    lineHeight: 11,
    fontSize: 10,
    fontWeight: '600',
    opacity: 0.4,
  },
});
