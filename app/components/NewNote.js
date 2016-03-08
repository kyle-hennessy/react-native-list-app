'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import moment from 'moment';


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
  }
})
const currentDate = () => {
  let d = Date.now(new Date());
  return moment(d).format("MMMM Do, YYYY");
};

export default class NewNote extends Component {
  constructor(props){
    super(props);
    this.state = { title: 'Untitled', text: '', date: currentDate()};
  }
  render(){
    return(
      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <TextInput
          placeholder='Title'
          autoFocus={true}
          style={ styles.input }
          onChangeText={(text) => this.setState({title})}
          value={this.state.title}
        />
        <Text>Note</Text>
        <TextInput
          multiline={true}
          placeholder='Note'
          style={ styles.textInput }
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>created: {this.state.date} </Text>
      </View>
    );
  }
}
