import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import Layout from '../layout/Layout';
import DayItem from '../components/DayItem';
import {MAIN_HORIZONTAL_PADDING} from '../common/constants';
import {Colors} from '../common/style';

const LeaderboardScreen: FC = () => {
  return (
    <Layout>
      <View style={styles.daysRow}>
        <DayItem text={'Weekly'} isActive={true} />
        <DayItem text={'3 days'} isActive={false} />
        <DayItem text={'1 day'} isActive={false} />
        <DayItem text={'Special'} isActive={false} />
      </View>
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
    // backgroundColor: Colors.red,
  },
});
