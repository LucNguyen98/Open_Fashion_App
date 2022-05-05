import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import AppText from 'components/AppText';
import {BUTTON_PRESETS, TEXT_PRESETS} from 'constants/theme';
import {ForwardArrow, Line} from 'assets/icons';
import ProductFilter from './ProductFilter';
import {scale} from 'react-native-utils-scale';
import {Product3, Product4, Product5, Product6} from 'assets/images';
import ProductResults from './ProductResults';
import Button from 'components/Button/Button';

const products = [
  {
    categoryId: 1,
    category_name: 'All',
    title: '21WN',
    price: 120,
    image: Product3,
  },
  {
    categoryId: 1,
    category_name: 'All',
    title: '21WN',
    price: 120,
    image: Product4,
  },
  {
    categoryId: 1,
    category_name: 'All',
    title: '21WN',
    price: 120,
    image: Product5,
  },
  {
    categoryId: 1,
    category_name: 'All',
    title: '21WN',
    price: 120,
    image: Product6,
  },
];

const NewArrival = () => {
  const filters = ['All', 'Apparel', 'Dress', 'Tshirt', 'Bag'];
  const [selectedTab, setTab] = useState('All');
  return (
    <SafeAreaView forceInset={{top: 'never'}} style={styles.container}>
      <View
        style={{
          marginVertical: scale(16),
        }}>
        <AppText preset={TEXT_PRESETS.TITLE}>New Arrival</AppText>
        <Line />
      </View>

      <ProductFilter
        data={filters}
        selectedTab={selectedTab}
        onChangeTab={setTab}
      />
      <ProductResults products={products} />

      <Button
        preset={BUTTON_PRESETS.SECONDARY}
        title="Explore More"
        rightIcon={ForwardArrow}
        style={styles.btnContainer}
        textStyle={{
          textTransform: 'capitalize',
        }}
      />
    </SafeAreaView>
  );
};

export default React.memo(NewArrival);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: scale(27),
    paddingHorizontal: scale(16),
  },
  btnContainer: {
    width: scale(155),
    borderWidth: 0,
    marginVertical: scale(24),
  },
});
