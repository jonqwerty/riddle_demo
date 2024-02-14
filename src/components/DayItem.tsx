import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {Shadow} from 'react-native-shadow-2';

import {Colors, FontFamily} from '../common/style';
import {MAIN_HORIZONTAL_PADDING, SCREEN_WIDTH} from '../common/constants';

interface IDayItemProps {
  text: string;
  isActive: boolean;
  setActiveItem: (t: string) => void;
}

const DayItem: FC<IDayItemProps> = ({text, isActive, setActiveItem}) => {
  const pressHandler = () => setActiveItem(text);
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Shadow
        distance={15}
        startColor={isActive ? Colors.shadow_200 : Colors.shadow_100}
        offset={[0, 0]}
        style={isActive ? [styles.container, styles.active] : styles.container}>
        <View>
          <Text
            style={
              isActive
                ? [styles.text, {color: Colors.green_200, opacity: 1}]
                : styles.text
            }>
            {text}
          </Text>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default DayItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light_100,
    borderRadius: 16,
    width: (SCREEN_WIDTH - 2 * MAIN_HORIZONTAL_PADDING - 3 * 8) / 4,
  },

  active: {borderWidth: 1, borderColor: Colors.green_200},

  text: {
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.font_100,
    opacity: 0.66,
    fontSize: 12,
  },
});
