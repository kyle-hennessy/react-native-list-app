'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import moment from 'moment';

import AddNote from './AddNote';
import Note from './Note';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rowStyle: {
    flex: 1,
    backgroundColor: '#efefef',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  rowTags: {
    textAlign: 'right',
    color: '#555',
    fontStyle: 'italic',
    fontSize: 10
  },
  rightText: {
    // textAlign: 'right'
  }
});

export default class NotesList extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.rowPressed = this.rowPressed.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.state = { dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }).cloneWithRows(this.props.MOCK_STATE.notes) };
  }
  rowPressed(note){
    this.props.navigator.push({
      title: note.title,
      component: Note,
      passProps: { note }
    });
  }
  renderRow(rowData){
    return(
      <TouchableHighlight onPress={() => this.rowPressed(rowData)} underlayColor="#ededed" style={styles.rowStyle}>
        <View>
          <Text style={styles.rowTitle}>{rowData.title}</Text>
          <Text>{rowData.summary}</Text>
          <View style={styles.rightText}>
            <Text style={styles.rowTags}>Date: {moment(rowData.date).format("MMMM Do, YYYY")}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow }/>
        <AddNote {...this.props} />
      </View>
    );
  }
}
