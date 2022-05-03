import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS} from 'constants/theme';
import {Line} from 'assets/icons';
import CategoryTab from '../CategoryTab';
import {scale} from 'react-native-utils-scale';

const ArrivalList = () => {
  const filters = ['All', 'Apparel', 'Dress', 'Tshirt', 'Bag'];
  const [selectedTab, setTab] = useState('All');
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: scale(16),
        }}>
        <AppText preset={TEXT_PRESETS.TITLE}>New Arrival</AppText>
        <Line />
      </View>

      <CategoryTab
        data={filters}
        selectedTab={selectedTab}
        onChangeTab={setTab}
      />
    </View>
  );
};

export default React.memo(ArrivalList);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: scale(27),
  },
});
