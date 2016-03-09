'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import { newNote } from '../actions/actions';


const styles = StyleSheet.create({
  input: {
    flex: 0.25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  textInput: {
    flex: 2,
    flexDirection: 'column',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 15,
    marginTop: 25,
  },
  submit: {
    flex: 0.25,
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: 'blue',
  }
})
const currentDate = () => {
  let d = Date.now(new Date());
  return moment(d).format("MMMM Do, YYYY");
};

class NewNote extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    this.props.dispatch(newNote({id: 6, title: 'TEST super test', summary: 'sample testztxt'}));
  }
  render(){
    return(
      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <TextInput
          placeholder='Title'
          autoFocus={true}
          style={ styles.input }
        />
        <Text>Note</Text>
        <TextInput
          multiline={true}
          placeholder='Note'
          style={ styles.textInput }
        />
        <Text>created: {currentDate()} </Text>
        <TouchableHighlight style={styles.submit} onPress={this.handleSubmit}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default connect()(NewNote);
