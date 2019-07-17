import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ImageItem from './ImageItem';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <ImageItem text={'Sun'}/>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
