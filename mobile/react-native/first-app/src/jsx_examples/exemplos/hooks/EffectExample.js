import { useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default function TelaMoedas() {
  const [moedas, setMoedas] = useState(0);
  useEffect(() => {
    console.log("Executou");
    if (moedas === 5) {
      Alert.alert("Sucesso, você desbloqueou o baú");
    }
  });

  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Moedas coletadas: {moedas}</Text>
        <Button title="Pegar Moeda" onPress={() => setMoedas(moedas + 1)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  texto: { fontSize: 24, marginBottom: 20 },
});