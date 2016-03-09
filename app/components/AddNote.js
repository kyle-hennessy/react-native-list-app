'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import NewNote from './NewNote';

const styles = StyleSheet.create({
  circle: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default class AddNote extends Component {
  constructor(props){
    super(props);
    this.handleAddNew = this.handleAddNew.bind(this);
  }
  handleAddNew(){
    this.props.navigator.push({
      title: 'New Note',
      component: NewNote,
      ...this.props
    });
  }
  render(){
    return (
      <TouchableHighlight style={styles.circle} onPress={this.handleAddNew}>
        <Text style={styles.text}>New Note</Text>
      </TouchableHighlight>
    );
  }
}
