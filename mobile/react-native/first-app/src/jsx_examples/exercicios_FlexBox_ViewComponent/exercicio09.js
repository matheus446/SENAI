import { StyleSheet, View } from "react-native";

export default function ExercicioView09() {
  return (
    <View style={styles.container}>
      
      <View style={styles.semaforo}>
        <View style={styles.red}></View>
        <View style={styles.yellow}></View>
        <View style={styles.green}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  semaforo: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10
  },

  red: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "red"
  },

  yellow: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "yellow"
  },

  green: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "green"
  }
});