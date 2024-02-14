import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import Layout from '../layout/Layout';
import RiddleCard from '../components/RiddleCard';
import {Colors} from '../common/style';

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
        rightTopCornerColor={Colors.wiolet}
      />

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
});
