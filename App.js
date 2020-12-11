import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';


export default function App() {

const clickHandler = () => {}

  return (
    
  <View style={styles.container}>

      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.headerText}> Example 1 React-Native </Text>
      </View>


      {/*Image*/}
      <View style={styles.imageBody}>
        <Image source={require('./assets/lulz.jpg')} style={styles.imageBody}/>
      </View>


      {/*Row 1: Buttons*/}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
            <Button title='BUTTON' onPress={clickHandler} color='grey' />
        </View>

        <View style={styles.buttonContainer}>
            <Button title='BUTTON' onPress={clickHandler} color='grey' />
        </View>
      </View>


      {/*Row 2: Buttons*/}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
            <Button title='BUTTON' onPress={clickHandler} color='grey' />
        </View>

        <View style={styles.buttonContainer}>
            <Button title='BUTTON' onPress={clickHandler} color='grey' />
        </View>
      </View>


      {/*Row 3: Email + textInput*/}
      <View style={styles.inputRow}>

        <View style={styles.emailText}>
            <Text>Email</Text>
        </View>

        <View style={styles.textInput}>
            <TextInput style={styles.textView}/>
        </View>

      </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
        backgroundColor: 'skyblue',
        height: 50,
        paddingTop: 10,
        paddingLeft: 10,
  },
  headerText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
  },
  imageBody: {
        //backgroundColor: 'grey',
        width: 120,
        height: 140,
        marginLeft: 70,
        marginTop:  7,
        marginBottom: 40,
  },
  
  buttonContainer: {
        //flex: 1,
        alignItems: 'center',
  },
  buttonRow: {
        //flex: 1,
        //backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        height: 40,
  },
  inputRow: {
        //flex: 3,
        //backgroundColor: 'skyblue',
        flexDirection: 'row',
        marginTop: 10,
  },
  textInput: {
        //flex: 3,
        backgroundColor: 'white',
        
  },
  textView: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 25,
        width: 200,
  },
  emailText: {
        //flex: 1,
        //backgroundColor: 'coral',
        marginLeft: 20,
        marginTop: 40,
        marginRight: 40,
  }
});
