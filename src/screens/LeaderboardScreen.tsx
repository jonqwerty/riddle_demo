import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';

import Layout from '../layout/Layout';
import DayItem from '../components/DayItem';
import {MAIN_HORIZONTAL_PADDING} from '../common/constants';
import {Colors, FontFamily} from '../common/style';
import Button from '../components/Button';
import Input from '../components/Input';

const LeaderboardScreen: FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Weekly');
  return (
    <Layout>
      <>
        <View style={styles.daysRow}>
          <DayItem
            text={'Weekly'}
            isActive={activeItem === 'Weekly'}
            setActiveItem={setActiveItem}
          />
          <DayItem
            text={'3 days'}
            isActive={activeItem === '3 days'}
            setActiveItem={setActiveItem}
          />
          <DayItem
            text={'1 day'}
            isActive={activeItem === '1 day'}
            setActiveItem={setActiveItem}
          />
          <DayItem
            text={'Special'}
            isActive={activeItem === 'Special'}
            setActiveItem={setActiveItem}
          />
        </View>
        <Text style={styles.title}>Weekly Riddles</Text>
        <Text style={styles.body}>
          I can add to several hundred. But can’t subtract multiply or divide.
          Whatever I add to, it’s always in front of you but never behind. And
          the number I add to You can’t really hide!
        </Text>
        <Text style={styles.text}>Who am I?</Text>

        <View style={styles.inputMargin}>
          <Input />
        </View>

        <View style={styles.inputMargin}>
          <Button name={'Submit'} />
        </View>

        <Text style={styles.textAttempts}>5 attempts remaining</Text>
      </>
    </Layout>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  daysRow: {
    marginTop: 10,
    paddingVertical: 20,
    marginHorizontal: MAIN_HORIZONTAL_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    marginTop: 10,
    marginLeft: MAIN_HORIZONTAL_PADDING,
    fontFamily: FontFamily.poppins_extrabold,
    color: Colors.font_200,
    fontSize: 24,
  },

  body: {
    marginTop: 10,
    paddingHorizontal: MAIN_HORIZONTAL_PADDING,
    fontFamily: FontFamily.poppins_regular,
    color: Colors.font_100,
    opacity: 0.86,
    lineHeight: 28,
    fontSize: 16,
  },

  text: {
    marginTop: 25,
    paddingHorizontal: MAIN_HORIZONTAL_PADDING,
    fontFamily: FontFamily.poppins_bold,
    color: Colors.font_100,
    opacity: 0.66,
    lineHeight: 28,
    fontSize: 16,
  },

  textAttempts: {
    marginTop: 20,
    paddingHorizontal: MAIN_HORIZONTAL_PADDING,
    fontFamily: FontFamily.poppins_medium,
    color: Colors.font_100,
    opacity: 0.86,
    fontSize: 12,
    lineHeight: 18,
    alignSelf: 'center',
  },

  inputMargin: {marginTop: 20},
});
