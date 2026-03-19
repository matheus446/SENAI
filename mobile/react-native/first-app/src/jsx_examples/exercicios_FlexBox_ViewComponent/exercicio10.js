import { StyleSheet, View } from "react-native";

export default function ExercicioView10() {
  return (
    <View style={styles.container}>

      <View style={styles.header}></View>

      <View style={styles.content}>

        <View style={styles.rowCards}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>

        <View style={styles.rowPanels}>
          <View style={styles.mainPanel}></View>
          <View style={styles.sidePanel}></View>
        </View>

      </View>

      <View style={styles.footer}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    height: 50,
    backgroundColor: "#f700ff"
  },

  content: {
    flex: 1,
    padding: 8,
    gap: 8
  },

  rowCards: {
    flexDirection: "row",
    gap: 8
  },

  card: {
    flex: 1,
    height: 80,
    backgroundColor: "#4caf50"
  },

  rowPanels: {
    flex: 1,
    flexDirection: "row",
    gap: 8
  },

  mainPanel: {
    flex: 2,
    backgroundColor: "#2196f3"
  },

  sidePanel: {
    flex: 1,
    backgroundColor: "#ffc107"
  },

  footer: {
    height: 40,
    backgroundColor: "#333"
  }
});