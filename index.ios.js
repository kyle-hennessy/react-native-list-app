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

const MOCK_STATE = {
  notes: [
    {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 100
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 100
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 124
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 165
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...Here is a brief clip of the text truncated...Here is a brief clip of the text truncated...Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 65
    }
  ]
};

class NativeNotes extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigatorIOS style={styles.wrapper}
        initialRoute={{ component: NotesList, title: 'Notes Start Here', passProps: { MOCK_STATE } }}
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
