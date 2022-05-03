import {SafeAreaView} from 'react-native';
import React from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS, BUTTON_PRESETS} from 'constants/theme';
import Button from './components/Button/Button';
import {Backward, ForwardArrow, Heart, Plus} from './assets/icons';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Product from 'components/Product/Product';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Button title="home page" width={196} leftIcon={Backward} />

      <Button
        preset={BUTTON_PRESETS.SECONDARY}
        title="home page"
        width={196}
        leftIcon={Backward}
      />

      <Button
        preset={BUTTON_PRESETS.SECONDARY}
        title="home page"
        width={196}
        rightIcon={ForwardArrow}
      />

      <Button title="home page" width={196} rightIcon={ForwardArrow} />

      <Button title="chat with us" width={187} />

      <Button
        preset={BUTTON_PRESETS.SECONDARY}
        title="chat with us"
        width={187}
      />

      <Button
        title="add to basket"
        width={375}
        height={56}
        style={{justifyContent: 'flex-start', paddingHorizontal: 16}}
        leftIcon={Plus}
        rightIcon={Heart}
        rightIconStyle={{
          position: 'absolute',
          right: 16,
        }}
      />

      <Button
        title="Submit"
        width={375}
        height={56}
        rightIcon={ForwardArrow}
        rightIconStyle={{
          marginLeft: 24,
        }}
      /> */}

      <Header />

      <Product />

      <Footer />
    </SafeAreaView>
  );
}
