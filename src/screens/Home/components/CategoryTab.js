import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS} from 'constants/theme';
import Button from 'components/Button/Button';
import {DotRectangle} from 'assets/icons';

function CategoryTab({data = [], selectedTab, onChangeTab}) {
  return (
    <ScrollView
      horizontal
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.scrollView}>
      {data.map((item, index) => {
        return (
          <Button
            key={index + ''}
            onPress={() => {
              onChangeTab(item);
            }}>
            <View style={styles.tab}>
              <AppText preset={TEXT_PRESETS.BODY_MEDIUM}>{item}</AppText>
              {selectedTab === item ? <DotRectangle /> : null}
            </View>
          </Button>
        );
      })}
    </ScrollView>
  );
}

export default React.memo(CategoryTab);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
