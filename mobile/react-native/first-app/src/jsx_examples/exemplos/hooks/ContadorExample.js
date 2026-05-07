
import {useState} from "react"
import {Text, TouchbleOpacity, View, StyleSheet} from "react-native"

export default function ContadorExemplo() {
    const [contador, setContador] = useState(0)

    return (
        <View style={style,container}>
            <Text>(container)</Text>
            <TouchbleOpacity
            onPress={() => setContador((prev) => prev + 1)}
            style = {styles.button}
            > 
            <Text style = {styles.text}>Clique para acressentar o valor</Text>
            </TouchbleOpacity>
            
            </View>

    )
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
justifyContent: "center",
},

button: {
backgroundColor: "#4285f4",
padding: 12,
borderRadius: 8,
marginTop: 16,
},

text: {
color: "#fff",
},
});
