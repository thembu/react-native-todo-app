import { StyleSheet , Text, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
export default function TodoItem({item, remove}) {

return (
    <TouchableOpacity onPress={() => remove(item.key)}>
        <View style={styles.item}>
        <MaterialIcons name="delete" size={18}/>
        <Text style={styles.text}>{item.text}</Text>
        </View>
    </TouchableOpacity>
)

}


const styles = StyleSheet.create({
    item : {
        padding : 16,
        marginTop: 15,
        backgroundColor : 'white',
        borderWidth :1,
        borderStyle : 'dashed',
        borderRadius : 10,
        flexDirection: 'row',

    },

    text : {

        marginLeft : 10

    }
})