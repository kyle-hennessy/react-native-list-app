'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rowStyle: {
    height: 60,
    backgroundColor: '#efefef',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
    alignItems: 'right'
  }
});

export default class NotesList extends Component {
  constructor(props){
    super(props);
    this.state = { dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }).cloneWithRows(this.props.MOCK_STATE.notes) };
  }
  renderRow(rowData){
    return(
      <TouchableHighlight underlayColor="#ededed" style={styles.rowStyle}>
        <View>
          <Text style={styles.rowTitle}>{rowData.title}</Text>
          <Text>{rowData.summary}</Text>
          <View style={style.rightText}>
            <Text style={styles.rowTags}>Tags: {rowData.tags.join(', ')}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow }/>
        <Text style={styles.welcome}>
          Notes List
        </Text>
        <Text>
          {Object.keys(this.props).join(', ')}
        </Text>
        <Text>
        </Text>
      </View>
    );
  }
}