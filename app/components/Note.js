'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontWeight: 'bold'
  }
});

export default class Note extends Component {
  render(){
    let note = this.props.note;
    let { summary, title, id, date } = note;

    return(
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{summary}</Text>
        <Text>{date}</Text>
      </View>
    );
  }
}
