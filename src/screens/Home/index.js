import {StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Banner from './components/Banner';
import NewArrival from './components/NewArrival';
import Brands from './components/Brands';
import Collections from './components/Collections';
import Videos from './components/Videos';
import Products from './components/Products';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => <Header />,
    });
  }, [navigation]);

  return (
    <ScrollView
      style={{
        backgroundColor: '#FFFFFF',
      }}
      // stickyHeaderIndices={[0]}
      // stickyHeaderHiddenOnScroll
      contentContainerStyle={styles.contentContainerStyle}>
      <Banner />
      <NewArrival />
      <Brands />
      <Collections />
      <Videos/>
      <Products/>
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },
});
