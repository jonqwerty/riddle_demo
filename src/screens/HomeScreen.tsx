import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import Layout from '../layout/Layout';
import RiddleCard from '../components/RiddleCard';
import {Colors} from '../common/style';
import RiddleCardSmall from '../components/RiddleCardSmall';

const HomeScreen: FC = () => {
  return (
    <Layout>
      <View style={styles.gap} />
      <RiddleCard
        title={'Weekly Riddle'}
        body={'Riddles you need to solve weekly'}
        image={require('../assets/images/question_marks.png')}
        imgRight={-10}
        imgTop={-5}
        rightTopCornerColor={Colors.violet}
      />

      <View style={styles.gap} />

      <View style={styles.row}>
        <RiddleCardSmall
          title={'3 Days \nExp. Riddles'}
          body={'3 days for solving'}
          image={require('../assets/images/three.png')}
          imgRight={-10}
          imgTop={-20}
          rightTopCornerColor={Colors.pink}
        />

        <RiddleCardSmall
          title={'1 Day \nExp. Riddles'}
          body={'1 day for solving'}
          image={require('../assets/images/one.png')}
          imgRight={-10}
          imgTop={-20}
          rightTopCornerColor={Colors.pink}
        />
      </View>

      <View style={styles.gap} />
      <RiddleCard
        title={'Special Brand Riddles'}
        body={'Riddles related with popular brands such as'}
        image={require('../assets/images/brand.png')}
        imgRight={-65}
        imgTop={-60}
        rightTopCornerColor={Colors.blue}
        bottomImageOne={require('../assets/images/nike.png')}
        bottomImageTwo={require('../assets/images/mcdonalds.png')}
        bottomImageThree={require('../assets/images/lego.png')}
        titleSize={16}
      />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  gap: {height: 30},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
});
