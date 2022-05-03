import {SafeAreaView} from 'react-native';
import React from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS, BUTTON_PRESETS} from 'constants/theme';
import Button from './components/Button/Button';
import {Backward, ForwardArrow, Heart, Plus} from './assets/icons';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Product from 'components/Product/Product';
import {PRODUCT_TYPE} from 'constants/product_type';
import RootNavigator from './routes/RootNavigator';

export default function App() {
  return <RootNavigator />;
}
