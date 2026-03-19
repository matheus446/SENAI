import { StyleSheet, View } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}></View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    height: 60,
    backgroundColor: "black"
  },

  content: {
    flex: 1,
    backgroundColor: "red"
  },

  footer: {
    height: 50,
    backgroundColor: "yellow"
  }
});