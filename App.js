import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import Header from './components/header'
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {


  const[todos, setTodos] = useState([
    {text : 'buy coffee', key : 1},
    {text : 'buy bread', key : 2},
    {text : 'buy chowing juice', key : 3},

  ])


  const pressHandler  = (key) => {
    setTodos((prev_todo) => {
     return  prev_todo.filter((todo) => todo.key != key)
    })
  }

  const submiHandler = (text) => {

    if(text.length >= 3) {

    setTodos((prev_todo) => {
      return [
      {text : text, key : Math.random().toString()},
      ...prev_todo
      ]
    })
  }
  else {
    Alert.alert('OOPS!', 'Todos need to be 3 characters long', [
      {text : 'understood', onPress: () => console.log('alert closed')}
    ])
  }
  }

  return (

    <TouchableWithoutFeedback onPress={() => console.log('keybord dismissed')}>
    <View style={styles.container}>     
      <Header/>
    <View style={styles.content}>
      {/* for form */}
      <AddTodo add = {submiHandler}/>
      <View style={styles.list}>
            <FlatList
            
            data = {todos}
            renderItem={({item}) => (
              <TodoItem item={item} remove = {pressHandler} ></TodoItem>
            )}


            />
      </View>
    </View>
   
    </View>
    </TouchableWithoutFeedback>
  ); 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},

content : {
  flex : 1,
  padding : 40,
  marginTop : 20

},

list : {
  flex : 1,
  marginTop: 20,
}


});
