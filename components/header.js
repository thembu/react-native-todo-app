import { StyleSheet, Text ,View } from "react-native";

export default function header() {
    return (
        <View style={styles.header}> 
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({

header : {
    height : 80,
    paddingTop : 30,
    backgroundColor : '#2832C2'
},


title : {
    textAlign : "center",
    color : 'white',
    fontSize: 20,
    fontWeight : 'bold'
}


})