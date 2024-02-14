import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import LinearGradient from 'react-native-linear-gradient';

interface INotificationItemProps {
  icon: React.ReactElement;
  text: string;
  color_100: string;
  color_200: string;
}

const NotificationItem: FC<INotificationItemProps> = ({
  icon,
  text,
  color_100,
  color_200,
}) => {
  return (
    <View style={styles.container}>
      {icon}
      <LinearGradient
        colors={[color_100, color_200]}
        style={styles.circle}
        useAngle={true}
        angle={145}
        angleCenter={{x: 0.3, y: 0.5}}>
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 14,
  },

  circle: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginTop: 2,
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.white,
    lineHeight: 13,
    fontSize: 11,
    fontWeight: '600',
  },
});
