/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';

import NotesList from './app/components/NotesList';


class NativeNotes extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS style={styles.wrapper}
          initialRoute={{ component: NotesList, title: 'Notes Start Here', passProps: { MOCK_STATE: store.getState() } }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

AppRegistry.registerComponent('NativeNotes', () => NativeNotes);
