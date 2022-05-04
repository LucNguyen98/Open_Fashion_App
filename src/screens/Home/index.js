import {StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Banner from './components/Banner';
import NewArrival from './components/NewArrival';

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
      contentContainerStyle={styles.contentContainerStyle}>
      <Banner />
      <NewArrival />
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
