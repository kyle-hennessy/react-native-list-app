'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Note extends Component {
  render(){
    let note = this.props.note;
    let { summary, title, id, date } = note;

    return(
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{summary}</Text>
        <Text>{date}</Text>
      </View>
    );
  }
}
