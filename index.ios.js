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

import NotesList from './app/components/NotesList';

const MOCK_STATE = {
  notes: [
    {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      tags: ['groceries', 'me']
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      tags: ['groceries', 'me']
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      tags: ['groceries', 'me']
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      tags: ['groceries', 'me']
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      tags: ['groceries', 'me']
    }
  ]
};

class NativeNotes extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.wrapper}
        initialRoute={{ component: NotesList, title: 'Notes Start Here', passProps: { MOCK_STATE } }}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

AppRegistry.registerComponent('NativeNotes', () => NativeNotes);
