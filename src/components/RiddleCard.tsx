import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';

import {Colors, FontFamily} from '../common/style';
import {MAIN_HORIZONTAL_PADDING, SCREEN_WIDTH} from '../common/constants';

interface IRiddleCardProps {
  title: string;
  body: string;
  image: ImageSourcePropType | undefined;
  imgRight: number;
  imgTop: number;
  rightTopCornerColor: string;
  bottomImageOne?: ImageSourcePropType | undefined;
  bottomImageTwo?: ImageSourcePropType | undefined;
  bottomImageThree?: ImageSourcePropType | undefined;
  titleSize?: number;
}

const RiddleCard: FC<IRiddleCardProps> = ({
  title,
  body,
  image,
  imgRight,
  imgTop,
  rightTopCornerColor,
  bottomImageOne,
  bottomImageTwo,
  bottomImageThree,
  titleSize,
}) => {
  return (
    <Shadow
      distance={20}
      startColor={Colors.shadow_100}
      offset={[20, 15]}
      style={styles.container}>
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
          angle={40}
          angleCenter={{x: 1.8, y: 0.8}}>
          <View style={styles.row}>
            <View>
              <Text
                style={[styles.title, {fontSize: titleSize ? titleSize : 24}]}>
                {title}
              </Text>
              <Text style={styles.body}>{body}</Text>
            </View>
          </View>
          <Image
            source={image}
            resizeMode="cover"
            style={[styles.image, {right: imgRight, top: imgTop}]}
          />

          <View style={styles.bottomImages}>
            {bottomImageOne ? (
              <Image source={bottomImageOne} resizeMode="cover" />
            ) : null}
            {bottomImageTwo ? (
              <Image source={bottomImageTwo} resizeMode="cover" />
            ) : null}
            {bottomImageThree ? (
              <Image source={bottomImageThree} resizeMode="cover" />
            ) : null}
          </View>
        </LinearGradient>
      </LinearGradient>
    </Shadow>
  );
};

export default RiddleCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 26,
    backgroundColor: Colors.white,
    width: SCREEN_WIDTH - 2 * MAIN_HORIZONTAL_PADDING,
    alignSelf: 'center',
  },

  innerContainer: {
    height: 198,
    width: SCREEN_WIDTH - MAIN_HORIZONTAL_PADDING - MAIN_HORIZONTAL_PADDING - 2,
    borderRadius: 25,
  },

  innerGradient: {
    position: 'absolute',
    padding: 24,
    height: 198,
    width: SCREEN_WIDTH - MAIN_HORIZONTAL_PADDING - MAIN_HORIZONTAL_PADDING - 2,
    borderRadius: 25,
    justifyContent: 'center',
  },

  row: {flexDirection: 'row'},

  bottomImages: {flexDirection: 'row', gap: 10, marginTop: 18},

  title: {
    fontFamily: FontFamily.poppins_extrabold,
    color: Colors.font_200,
    width: '55%',
  },

  body: {
    fontFamily: FontFamily.poppins_medium,
    color: Colors.font_100,
    opacity: 0.66,
    lineHeight: 18,
    fontSize: 12,
    width: SCREEN_WIDTH > 350 ? '55%' : '40%',
    marginTop: 15,
  },

  image: {position: 'absolute'},
});
