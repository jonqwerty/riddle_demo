import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, FontFamily} from '../common/style';
import {HALF_SCREEN_WIDTH} from '../common/constants';

interface IRiddleCardSmallProps {
  title: string;
  body: string;
  image: ImageSourcePropType | undefined;
  imgRight: number;
  imgTop: number;
  rightTopCornerColor: string;
}

const RiddleCardSmall: FC<IRiddleCardSmallProps> = ({
  title,
  body,
  image,
  imgRight,
  imgTop,
  rightTopCornerColor,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.card_bg_100, Colors.card_bg_200]}
        style={styles.innerContainer}
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.3, y: 0.5}}>
        <LinearGradient
          colors={[Colors.card_bg_100, rightTopCornerColor]}
          style={styles.innerGradient}
          useAngle={true}
          angle={45}
          angleCenter={{x: 1.6, y: 0.3}}>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.body}>{body}</Text>
            </View>
          </View>
          <Image
            source={image}
            resizeMode="cover"
            style={[styles.image, {right: imgRight, top: imgTop}]}
          />
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

export default RiddleCardSmall;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: HALF_SCREEN_WIDTH - 8,
    borderRadius: 26,
    backgroundColor: Colors.white,
  },

  innerContainer: {
    height: 198,
    width: HALF_SCREEN_WIDTH - 2 - 8,
    borderRadius: 25,
  },

  innerGradient: {
    position: 'absolute',
    padding: 20,
    height: 198,
    width: HALF_SCREEN_WIDTH - 2 - 8,
    borderRadius: 25,
    justifyContent: 'flex-end',
  },

  row: {flexDirection: 'row'},

  title: {
    fontFamily: FontFamily.poppins_bold,
    color: Colors.font_200,
    fontSize: 16,
    width: '80%',
  },

  body: {
    fontFamily: FontFamily.poppins_medium,
    color: Colors.font_100,
    opacity: 0.66,
    lineHeight: 18,
    fontSize: 12,
    width: '80%',
    marginTop: 15,
  },

  image: {position: 'absolute'},
});
