import { useState } from "react";
import {Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({add}) {


    const [text , setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View style={styles.input}>
            <TextInput
            
            placeholder="add"
            onChangeText={changeHandler}            
            
            />

            <Button onPress={() => add(text) } title='add todo' color='#2832C2'/>
        </View>

    )
}

const styles =  StyleSheet.create({

input : {
    marginBottom : 10,
    paddingHorizontal : 8,
    paddingVertical : 6,
    borderBottomWidth : 1,
    borderBottomColor : '#ddd'
}


})
