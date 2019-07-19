import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import RepoPage from './containers/RepoPage';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <Text>
            E3mo
          </Text>
          <RepoPage/>
        </SafeAreaView>
      </Provider>
    );
  }
}
